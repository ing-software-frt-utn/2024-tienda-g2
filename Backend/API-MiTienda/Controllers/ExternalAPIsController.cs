using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.Domain.Entities;
using Servicio_AFIP;


namespace API_MiTienda.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExternalAPIsController : ControllerBase
    {
        private readonly HttpClient _clientWithTokenApi;
        private readonly HttpClient _clientWithPaymentsApi;
        private IManageVentaService _manageVentaService;

        public ExternalAPIsController(IManageVentaService manageVentaService)
        {
            _clientWithTokenApi = new HttpClient();
            _clientWithTokenApi.BaseAddress = new Uri("https://developers.decidir.com/api/v2/");
            _clientWithTokenApi.DefaultRequestHeaders.Add("apikey", "b192e4cb99564b84bf5db5550112adea");

            _clientWithPaymentsApi = new HttpClient();
            _clientWithPaymentsApi.BaseAddress = new Uri("https://developers.decidir.com/api/v2/");
            _clientWithPaymentsApi.DefaultRequestHeaders.Add("apikey", "566f2c897b5e4bfaa0ec2452f5d67f13");
            _manageVentaService = manageVentaService;
        }

        #region DECIDIR
        [HttpPost("token")]
        public async Task<ActionResult<TarjetaDTO>> ObtenerToken([FromBody] TarjetaDTO tarjeta)
        {
            try
            {
                HttpResponseMessage response = await _clientWithTokenApi.PostAsJsonAsync("tokens", tarjeta);

                if (response.IsSuccessStatusCode)
                {
                    string content = await response.Content.ReadAsStringAsync();

                    TarjetaWithTokenDTO responseDto = JsonSerializer.Deserialize<TarjetaWithTokenDTO>(content);

                    string id = responseDto.id;

                    return Ok(new { id });
                }
                else
                {
                    throw new Exception("Error Al obtener el Token");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al conectar con el servicio externo. Detalles: {ex.Message}");

            }
        }

        [HttpPost("PayWithCard")]
        public async Task<ActionResult> EfectuarPago([FromBody] PagoTarjetaDTO Pago)
        {
            try
            {
                HttpResponseMessage response = await _clientWithPaymentsApi.PostAsJsonAsync("payments", Pago);

                if (response.IsSuccessStatusCode)
                {
                    string content = await response.Content.ReadAsStringAsync();
                    PagoTarjetaRespuestaDTO pagoTarjetaRespuesta = JsonSerializer.Deserialize<PagoTarjetaRespuestaDTO>(content);


                    return Ok(pagoTarjetaRespuesta);
                }
                else
                {
                    return StatusCode((int)response.StatusCode, $"Error al realizar el pago. Detalles: {response.ReasonPhrase}");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al conectar con el servicio externo. Detalles: {ex.Message}");
            }
            #endregion
        }

        #region AFIP
        [HttpPost("conectarAfip")]
        public async Task<ActionResult> ConectarAfip([FromBody] AfipDTO afipDTO)
        {
            try
            {

                var servicio = new LoginServiceClient();
                var autorizacion = servicio.SolicitarAutorizacionAsync("80594BA9-F102-4E0A-8B5D-B3A87383114A").Result;//llamar cuando iniciamos la venta
                var comprobante = servicio.SolicitarUltimosComprobantesAsync(autorizacion.Token).Result;

                Servicio_AFIP.TipoComprobante tipoComprobante = Servicio_AFIP.TipoComprobante.FacturaA;

                var condTrib = afipDTO.CondicionTributaria;
                int tComprobanteMiTienda = 0;
                if (condTrib == "RI" || condTrib == "M")
                {
                    tipoComprobante = Servicio_AFIP.TipoComprobante.FacturaA;
                    tComprobanteMiTienda = 9;
                }
                else if (condTrib == "E" || condTrib == "NR" || condTrib == "CF")
                {
                    tipoComprobante = Servicio_AFIP.TipoComprobante.FacturaB;
                    tComprobanteMiTienda = 10;
                }
                else
                {
                    tipoComprobante = Servicio_AFIP.TipoComprobante.FacturaA; //por defecto si no es ninguno
                    tComprobanteMiTienda = 9;

                }

                var solicitudAutorizacion = new SolicitudAutorizacion();

                solicitudAutorizacion.Fecha = DateTime.Now;
                solicitudAutorizacion.ImporteTotal = afipDTO.ImporteTotal;
                solicitudAutorizacion.ImporteNeto = Math.Round(afipDTO.ImporteTotal / 1.21, 2); ;
                solicitudAutorizacion.ImporteIva = Math.Round((afipDTO.ImporteTotal / 1.21) * 0.21,2);
                solicitudAutorizacion.NumeroDocumento = afipDTO.numeroDocumento;
                solicitudAutorizacion.TipoComprobante = tipoComprobante;
                
                if (afipDTO.numeroDocumento == 0)
                    solicitudAutorizacion.TipoDocumento = TipoDocumento.ConsumidorFinal;
                if (afipDTO.numeroDocumento < 99999999 && afipDTO.numeroDocumento > 1000000)
                    solicitudAutorizacion.TipoDocumento = TipoDocumento.Dni;
                else
                    solicitudAutorizacion.TipoDocumento = TipoDocumento.Cuit;

                solicitudAutorizacion.Numero = solicitudAutorizacion.TipoComprobante == Servicio_AFIP.TipoComprobante.FacturaA ? comprobante.Comprobantes[0].Numero + 1 : comprobante.Comprobantes[1].Numero + 1;
                var cae = servicio.SolicitarCaeAsync(autorizacion.Token, solicitudAutorizacion).Result;

                _manageVentaService.UpdateAfterAFIP(afipDTO.idVenta, cae.Cae,tComprobanteMiTienda);
                return Ok(cae);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al conectar con el servicio externo. Detalles: {ex.Message}");
            }
        }
        #endregion

    }
}
