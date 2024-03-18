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
    public class InventarioController : ControllerBase
    {
        private IManageInventarioService _manageService;

        public InventarioController(IManageInventarioService manageService)
        {
            _manageService = manageService;
        }


        [HttpGet]
        public ActionResult<ReturnInventarioDTO> GetAllInventarios(int idSucursal)
        {
            try
            {
                var inventarios = _manageService.GetInventarios(idSucursal);
                return Ok(inventarios);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal.");
            }
        }

        [HttpGet("getInventarioById")]
        public ActionResult<ReturnInventarioDTO> GetInventarioById(int idInventario)
        {
            try
            {
                var inventario = _manageService.GetInventarioById(idInventario);
                if (inventario == null)
                    return NotFound($"No existe combinaciones para el codigo buscado. Por favor reintente su busqueda con un valor diferente.");

                return Ok(inventario);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal.");
            }
        }

        [HttpGet("getInventarioByCodigoBarra")]
        public ActionResult<ReturnInventarioDTO> GetInventarioByIdorDni(int idSucursal, string codigoBarra)
        {
            try
            {
                var inventario = _manageService.GetInventarioByCodigoBarra(idSucursal, codigoBarra);

                if (inventario == null)
                    return NotFound($"No existe combinaciones para el codigo buscado. Por favor reintente su busqueda con un valor diferente.");

                return Ok(inventario);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal. Verifica el Codigo de Barra.");
            }

        }

        [HttpGet("getInventarioByParams")]
        public ActionResult<ReturnInventarioDTO> GetInventarioByParams(int idSucursal, string codigoBarra, int? idTalle = null, int? idTipoTalle = null, int? idColor = null)
        {
            try
            {
                if (idTalle != null && idTipoTalle == null || idTalle == null && idTipoTalle != null)
                {
                    return NotFound($"Debe seleccionar primero un tipo talle y luego un talle");
                }

                var inventario = _manageService.GetInventarioByParams(idSucursal, codigoBarra, idTalle, idTipoTalle, idColor);
                if (inventario == null)
                    return NotFound($"No existe combinaciones para el codigo buscado. Por favor reintente su busqueda con un valor diferente.");

                return Ok(inventario);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal. Verifica el Codigo de Barra.");
            }

        }

        [HttpPut("actualizarStock")]
        public ActionResult UpdateStockInventario(int inventario, int cantidad)
        {
            try
            {
                var message = _manageService.UpdateInventario(inventario,cantidad);
                return Ok(message);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }
        }

        //[HttpGet("getInventarioByNombreOrCuil")]
        //public ActionResult<ReturnInventarioDTO> GetInventarioByNombreOrCuil(string nombreOrcuil)
        //{
        //    try
        //    {
        //        var inventario = _manageService.GetInventariosByNombreOrCuil(nombreOrcuil);

        //        if (inventario == null)
        //            return NotFound($"No existe el inventario buscado. Por favor reintente su busqueda con un valor diferente.");

        //        return Ok(inventario);
        //    }
        //    catch (Exception)
        //    {
        //        return StatusCode(400, "Algo salió mal. Verifica el id.");
        //    }

        //}

        //#endregion


        //[HttpPost]
        //public ActionResult<ReturnInventarioDTO> PostInventario(ReturnInventarioDTO newInventario)
        //{
        //    try
        //    {
        //        var message = _manageService.CreateInventario(newInventario);
        //        return Ok(message);
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
        //    }

        //}

        //[HttpPut]
        //public ActionResult<ReturnInventarioDTO> UpdateInventario([FromBody] ReturnInventarioDTO inventario)
        //{
        //    try
        //    {
        //        var message = _manageService.UpdateInventario(inventario);
        //        return Ok(message);
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
        //    }
        //}

        //[HttpDelete("{idInventario:int}")]
        //public ActionResult<int> DeleteArticulo(int idInventario)
        //{
        //    try
        //    {
        //        var message = _manageService.DeleteInventario(idInventario);
        //        return Ok(message);
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
        //    }

        //}
    }
}
