using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

using Microsoft.EntityFrameworkCore;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.Domain.Entities;
using System.Collections;
using System.Collections.Generic;
using System.Drawing;

namespace API_MiTienda.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PagoController : ControllerBase
    {
        private IManagePagoService _manageService;
        private IManageVentaService _manageServiceVenta;

        private readonly HttpClient _clientWithTokenApi;
        private readonly HttpClient _clientWithPaymentsApi;

        public PagoController(IManagePagoService manageService, IManageVentaService manageServiceVenta)
        {
            _manageService = manageService;
            _manageServiceVenta = manageServiceVenta;

            _clientWithTokenApi = new HttpClient();
            _clientWithTokenApi.BaseAddress = new Uri("https://developers.decidir.com/api/v2/");
            _clientWithTokenApi.DefaultRequestHeaders.Add("apikey", "b192e4cb99564b84bf5db5550112adea");

            _clientWithPaymentsApi = new HttpClient();
            _clientWithPaymentsApi.BaseAddress = new Uri("https://developers.decidir.com/api/v2/");
            _clientWithPaymentsApi.DefaultRequestHeaders.Add("apikey", "566f2c897b5e4bfaa0ec2452f5d67f13");
        }



        #region PagoMiTienda


        [HttpGet("getPagoById")]
        public ActionResult<PagoReturnDTO> GetPagoById(int idPago)
        {
            try
            {
                var talle = _manageService.GetPagoById(idPago);

                if (talle == null)
                    return NotFound($"No existe el talle buscado. Por favor reintente su busqueda con un valor diferente.");

                return Ok(talle);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal. Verifica el id.");
            }

        }

        [HttpPost]
        public ActionResult<Pago> PostPago(PagoPostDTO newPago)
        {

            try
            {
                Pago pago = _manageService.CreatePago(newPago);
                return Ok(pago);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }

        }

        #endregion


        #region Decidir
        [HttpPost("tokenTarjeta")]
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
            return StatusCode(500);
        }

        [HttpPost("Pagar")]
        public async Task<ActionResult> EfectuarPago([FromBody] PagoPostDTO newPago)
        {
            Venta venta = _manageServiceVenta.GetVentaById(newPago.IdVenta);

            
            if (!string.IsNullOrEmpty(newPago.Token))
            {
                PagoTarjetaDTO pagoTarjeta = new PagoTarjetaDTO();
                pagoTarjeta.site_transaction_id = "90000" + venta.Id;
                pagoTarjeta.payment_method_id = 1;
                pagoTarjeta.token = newPago.Token;
                pagoTarjeta.bin = "450799";
                pagoTarjeta.amount = (decimal)venta.Importe;
                pagoTarjeta.currency = "ARS";
                pagoTarjeta.installments = 1;
                pagoTarjeta.description = "";
                pagoTarjeta.payment_type = "single";
                pagoTarjeta.establishment_name = "single";
                pagoTarjeta.sub_payments = new List<SubPaymentDTO>();

                try
                {
                    HttpResponseMessage response = await _clientWithPaymentsApi.PostAsJsonAsync("payments", pagoTarjeta);

                    if (response.IsSuccessStatusCode)
                    {
                        string content = await response.Content.ReadAsStringAsync();
                        PagoTarjetaRespuestaDTO pagoTarjetaRespuesta = JsonSerializer.Deserialize<PagoTarjetaRespuestaDTO>(content);

                        Pago pagotarjeta = _manageService.CreatePago(newPago);
                        _manageServiceVenta.UpdatePagoVenta(venta.Id, pagotarjeta);

                        return Ok(venta);
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
            }

            else
            {
                Pago pagoEfectivo = _manageService.CreatePago(newPago);
                _manageServiceVenta.UpdatePagoVenta(venta.Id, pagoEfectivo);
                return Ok(venta);
            }

        }

        #endregion

    }
}
