using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using MiTienda.Application.DTOs;
using MiTienda.DataAccess.Contexts;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;
using System.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using SymmetricSecurityKey = Microsoft.IdentityModel.Tokens.SymmetricSecurityKey;

namespace API_MiTienda.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController:ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IConfiguration _configuration;
        private readonly SignInManager<IdentityUser> _signIn;
        private readonly MiTiendaContexto _contexto;
        private IRepository<Vendedor> _vendedorRepo;

        public AccountsController(UserManager<IdentityUser> userManager, IConfiguration configuration, SignInManager<IdentityUser> signIn, MiTiendaContexto contexto, IRepository<Vendedor> vendedorRepo)
        {
            _userManager = userManager;
            _configuration = configuration;
            _signIn = signIn;
            _contexto = contexto;
            _vendedorRepo = vendedorRepo;
        }

        [HttpPost("create")]
        public async Task<ActionResult<AuthenticationResponseDTO>> Create([FromBody] UserCredentialsDTO credentials)
        {
            var usuario = new IdentityUser { UserName = credentials.Email, Email = credentials.Email };
            var result = await _userManager.CreateAsync(usuario,credentials.Password);

            if (result.Succeeded)
            {
                return await CreateToken(credentials);
            }
            else
            {
                return BadRequest(result.Errors);
            }
        }

        [HttpPost("login")]
        public async Task<ActionResult<AuthenticationResponseDTO>> Login([FromBody] UserCredentialsDTO credentials)
        {
            var result = await _signIn.PasswordSignInAsync(credentials.Email, credentials.Password, isPersistent: false, lockoutOnFailure: false);
            if (result.Succeeded)
            {
                var token =  await CreateToken(credentials);
                var user  = await UserByEmail(credentials.Email);
                Vendedor vendedor = _vendedorRepo.GetBy(x => x.userID == user.Value.Id).AsQueryable().Include(x => x.PuntoDeVenta).Include(x => x.PuntoDeVenta.Sucursal).SingleOrDefault();
                return new AuthenticationResponseDTO() { Token = token.Token, Expiracion = token.Expiracion, Role = user.Value.Role, Username = user.Value.Email, idVendedor = vendedor.Id, idPuntoDeVenta = vendedor.PuntoDeVenta.Id, idSucursal = vendedor.PuntoDeVenta.Sucursal.Id };
            }
            else
            {
                return BadRequest("Login incorrecto");
            }
        }

        [HttpGet("listadoUsuarios")]
        public async Task<ActionResult<List<UserDTO>>> UsersList()
        {
            var usersList = _contexto.Users.AsQueryable().Select(user => 
            new UserDTO() { Id = user.Id,
                Role = _contexto.UserClaims.AsQueryable().Where(claim => claim.UserId == user.Id).Select(claim => claim.ClaimValue).SingleOrDefault(), 
                Email = user.Email }).ToList();

            return usersList;
        }
        [HttpGet("user/{email}")]
        public async Task<ActionResult<UserDTO>> UserByEmail(string email)
        {
            var user = _contexto.Users.AsQueryable().Select(user =>new UserDTO(){Id = user.Id,
                Role = _contexto.UserClaims.AsQueryable().Where(claim => claim.UserId == user.Id).Select(claim => claim.ClaimValue).SingleOrDefault(),
                Email = user.Email
            }).Where(user => user.Email == email).SingleOrDefault();

            return user;
        }


        [HttpPost("SetRoleAdmin")]
        public async Task<ActionResult> SetRoleAdmin(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            await _userManager.AddClaimAsync(user, new Claim("role","admin"));
            return Ok(user);
        }

        [HttpPost("RemoveRoleAdmin")]
        public async Task<ActionResult> RemoveRoleAdmin(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            await _userManager.RemoveClaimAsync(user, new Claim("role","admin"));
            return Ok(user);
        }

            private async Task<AuthenticationResponseDTO> CreateToken(UserCredentialsDTO credentials)
        {
            var claims = new List<Claim>()
            {
                new Claim("email",credentials.Email)
            };

            var user = await _userManager.FindByEmailAsync(credentials.Email);
            var claimsDB = await _userManager.GetClaimsAsync(user);

            claims.AddRange(claimsDB);

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["llaveJWT"]));
            var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha256);

            var expiration = DateTime.UtcNow.AddYears(1);

            var token = new JwtSecurityToken(issuer: null, audience: null, claims: claims, expires: expiration,signingCredentials: creds);

            return new AuthenticationResponseDTO()
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiracion = expiration
            };
        }
}
}
