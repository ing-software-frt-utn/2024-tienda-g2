using API_MiTienda.InitialSetup;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using MiTienda.DataAccess.Contexts;
using Servicio_AFIP;
using System.ComponentModel.Design;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Cryptography.X509Certificates;
using System.Security.Cryptography.Xml;
using System.Text;

namespace API_MiTienda
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            string connectionString = builder.Configuration.GetConnectionString("StringConnection");
            builder.Services.InitialCharges(connectionString);

            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();
            builder.Services.AddIdentity<IdentityUser, IdentityRole>().AddEntityFrameworkStores<MiTiendaContexto>().AddDefaultTokenProviders();
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(builder.Configuration["llaveJWT"])),
                ClockSkew = TimeSpan.Zero
            });

            builder.Services.AddAuthorization(opciones =>
            {
                opciones.AddPolicy("IsADMIN", policy => policy.RequireClaim("role", "admin"));
                opciones.AddPolicy("IsVendedor", policy => policy.RequireClaim("role", "vendedor"));
            });

            var app = builder.Build();


            //LOG en consola
            app.Use(async (context, next) =>
            { using (var swapStream = new MemoryStream())
                {
                    var respuestaOriginal = context.Response.Body;
                    context.Response.Body = swapStream;
                    await next.Invoke();

                    swapStream.Seek(0, SeekOrigin.Begin);
                    string respuesta = new StreamReader(swapStream).ReadToEnd();
                    swapStream.Seek(0, SeekOrigin.Begin);

                    await swapStream.CopyToAsync(respuestaOriginal);
                    context.Response.Body = respuestaOriginal;
                    app.Logger.LogInformation(respuesta);
                }
            });

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(options =>
            {
                options.AllowAnyOrigin();
                options.AllowAnyMethod();
                options.AllowAnyHeader();
            });

            app.UseAuthorization();


            app.MapControllers();



            //afip
            //var servicio = new LoginServiceClient();
            //var autorizacion = servicio.SolicitarAutorizacionAsync("80594BA9-F102-4E0A-8B5D-B3A87383114A").Result;//llamar cuando iniciamos la venta
            //var comprobante = servicio.SolicitarUltimosComprobantesAsync(autorizacion.Token).Result;

            //var solicitudAutorizacion = new SolicitudAutorizacion();
            //solicitudAutorizacion.Fecha = DateTime.Now;
            //solicitudAutorizacion.ImporteIva = 21;
            //solicitudAutorizacion.ImporteNeto = 100;
            //solicitudAutorizacion.ImporteTotal = 121;
            //solicitudAutorizacion.NumeroDocumento = 0;//23406669999;
            //solicitudAutorizacion.TipoComprobante = TipoComprobante.FacturaB;
            //solicitudAutorizacion.TipoDocumento = TipoDocumento.ConsumidorFinal;
            //solicitudAutorizacion.Numero = solicitudAutorizacion.TipoComprobante == TipoComprobante.FacturaA ? comprobante.Comprobantes[0].Numero + 1 : comprobante.Comprobantes[1].Numero + 1;
            //var cae = servicio.SolicitarCaeAsync(autorizacion.Token, solicitudAutorizacion).Result;

            //Console.WriteLine(autorizacion);
            //Console.WriteLine(comprobante);
            //Console.WriteLine(cae);

            app.Run();

        }
    }
}