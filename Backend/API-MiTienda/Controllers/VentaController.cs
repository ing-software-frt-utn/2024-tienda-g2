using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;
using System.Collections;
using System.Drawing;
using System.ServiceModel.Channels;

namespace API_MiTienda.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VentaController : ControllerBase
    {
        private IManageVentaService _manageService;
        private IManageLineasVentaService _manageServiceLinea;
        private IVenta _ventaEnMemoria;
        private IQueryService<Stock> _stockQuery;
        private IQueryService<LineaDeVenta> _lineaQuery;

        public VentaController(IManageVentaService manageService, IManageLineasVentaService manageServiceLinea, IVenta ventaEnMemoria, IQueryService<Stock> stockQuery, IQueryService<LineaDeVenta> lineaQuery)
        {
            _manageService = manageService;
            _manageServiceLinea = manageServiceLinea;
            _ventaEnMemoria = ventaEnMemoria;
            _stockQuery = stockQuery;
            _lineaQuery = lineaQuery;
        }

        #region Parte 1 - VENTA


        [HttpPost("postVentaYLineas")]
        public ActionResult<Venta> PostVentaYLineas([FromBody] VentaYLineasPostDTO ventayLineasDTO)
        {
            try
            {
                int ventaId = _manageService.CrearVenta(ventayLineasDTO.Venta);

                foreach (var linea in ventayLineasDTO.LineasVenta)
                {
                    Stock? stock = _stockQuery.GetBy(s => s.Id == linea.StockID)
                        .Include(c => c.Color)
                        .Include(a => a.Articulo)
                        .Include(t => t.Talle)
                        .Include(tt => tt.Talle.TipoTalle)
                        .Include(x => x.Articulo.Marca)
                        .Include(x => x.Articulo.Categoria)
                        .SingleOrDefault();

                    LineaDeVenta lineaVenta = new LineaDeVenta() { Cantidad = linea.Cantidad, Stock = stock, VentaID = ventaId };
                    _manageServiceLinea.CrearLineaVenta(lineaVenta);
                }
                _manageService.UpdateImporteVenta(ventaId);
                return Ok(_manageService.GetVentaById(ventaId));
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }
        }

        [HttpPut("updateImporte/{idVenta:int}")]
        public ActionResult<VentaDTO> UpdateImporteVenta(int idVenta)
        {
            try
            {
                var message = _manageService.UpdateImporteVenta(idVenta);
                return Ok(message);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }
        }


        #endregion

        #region Parte 2 - VENTA


        [HttpPost("postLineasEnDB")]
        public ActionResult<IEnumerable<List<LineaDeVenta>>> PostLineasEnDB()
        {
            try
            {
                foreach (var linea in _ventaEnMemoria.GetLineas())
                {
                    linea.VentaID = _ventaEnMemoria.GetID();
                    _manageServiceLinea.CrearLineaVenta(linea);
                }
                //var message = _manageServiceLinea.CrearLineasVenta(_ventaEnMemoria.GetLineas());
                //return Ok(message);
                return Ok();

            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }
        }


        [HttpPut("updateClienteVenta/")]
        public ActionResult<String> UpdateClienteVenta(int idVenta, int IdCliente)
        {
            try
            {
                var message = _manageService.UpdateClienteVenta(idVenta, IdCliente);
                return Ok(message);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }
        }
        #endregion




        [HttpGet]
        public ActionResult<IEnumerable<Venta>> GetAllVentas()
        {
            try
            {
                var ventas = _manageService.GetVentas();
                return Ok(ventas);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal.");
            }
        }
      
        [HttpGet("getVentaById/{idVenta:int}")]
        public ActionResult<Venta> GetVentaById(int idVenta)
        {
            try
            {
                var venta = _manageService.GetVentaById(idVenta);
                if (venta == null)
                    return NotFound($"No existe la venta buscada. Por favor reintente su busqueda con un valor diferente.");

                return Ok(venta);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal. Verifica el id.");
            }

        }

        [HttpGet("lineas")]
        public ActionResult<IEnumerable<LineaVentaDTO>> GetAllLineasVentas()
        {
            try
            {
                var lineas = _lineaQuery.GetAll();
                return Ok(lineas);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal.");
            }
        }

        [HttpPut]
        public ActionResult<ClienteDTO> UpdateVenta([FromBody] VentaDTO venta)
        {
            //try
            //{
            //    var message = _manageService.UpdateCliente(cliente);
            //    return Ok(message);
            //}
            //catch (Exception ex)
            //{
            //return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            //}
            return StatusCode(400);
        }

        [HttpDelete("{ventaIDint}")]
        public ActionResult<int> DeleteVenta(int idVenta)
        {
            //try
            //{
            //    var message = _manageService.DeleteCliente(idCliente);
            //    return Ok(message);
            //}
            //catch (Exception ex)
            //{
            //    return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            //}
            return StatusCode(400);

        }
    }
}
