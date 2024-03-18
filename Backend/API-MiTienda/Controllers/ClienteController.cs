using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.Domain.Entities;
using System.Collections;
using System.Drawing;

namespace API_MiTienda.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private IManageClienteService _manageService;

        public ClienteController(IManageClienteService manageService)
        {
            _manageService = manageService;
        }

        #region GETS
        [HttpGet]
        public ActionResult<IEnumerable<ClienteDTO>> GetAllClientes()
        {
            try
            {
                var clientes = _manageService.GetClientes();
                return Ok(clientes);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal.");
            }
        }

        [HttpGet("getClienteByIdOrDni")]
        public ActionResult<ClienteDTO> GetClienteByIdorDni(int idordni)
        {
            try
            {
                var cliente = _manageService.GetClienteByIdOrDni(idordni);

                if (cliente == null)
                    return NotFound($"No existe el cliente buscado. Por favor reintente su busqueda con un valor diferente.");

                return Ok(cliente);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal. Verifica el id.");
            }

        }

        [HttpGet("getClienteByNombreOrCuil")]
        public ActionResult<ClienteDTO> GetClienteByNombreOrCuil(string nombreOrcuil)
        {
            try
            {
                var cliente = _manageService.GetClientesByNombreOrCuil(nombreOrcuil);

                if (cliente == null)
                    return NotFound($"No existe el cliente buscado. Por favor reintente su busqueda con un valor diferente.");

                return Ok(cliente);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal. Verifica el id.");
            }

        }

        [HttpGet("condicionesTributarias")]
        public ActionResult<IEnumerable<CondicionTributaria>> GetCondicionesTributarias()
        {
            try
            {
                var ctributarias = _manageService.GetCondicionesTributarias();
                return Ok(ctributarias);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal.");
            }
        }

        #endregion


        [HttpPost]
        public ActionResult<ClientePostDTO> PostCliente(ClientePostDTO newCliente)
        {
            try
            {
                var message = _manageService.CreateCliente(newCliente);
                return Ok(message);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }

        }



        

        [HttpPut]
        public ActionResult<ClienteDTO> UpdateCliente([FromBody] ClienteDTO cliente)
        {
            try
            {
                var message = _manageService.UpdateCliente(cliente);
                return Ok(message);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }
        }

        [HttpDelete("{idCliente:int}")]
        public ActionResult<int> DeleteArticulo(int idCliente)
        {
            try
            {
                var message = _manageService.DeleteCliente(idCliente);
                return Ok(message);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }
            
        }
    }
}
