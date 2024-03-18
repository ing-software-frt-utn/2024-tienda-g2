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
    public class ColorController : ControllerBase
    {
        private IManageColorService _manageService;

        public ColorController(IManageColorService manageService)
        {
            _manageService = manageService;
        }

        #region GETS
        [HttpGet]
        public ActionResult<IEnumerable<ColorDTO>> GetAllColors()
        {
            try
            {
                var colores = _manageService.GetColors();
                return Ok(colores);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal.");
            }
        }

        [HttpGet("getColorById")]
        public ActionResult<ColorDTO> GetColorById(int id)
        {
            try
            {
                var color = _manageService.GetColorById(id);

                if (color == null)
                    return NotFound($"No existe el color con el id: {id}. Por favor ingrese un id valido.");

                return Ok(color);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal. Verifica el id.");
            }

        }

        #endregion


        [HttpPost]
        public ActionResult<ColorDTO> PostColor(ColorDTO color)
        {
            try
            {
                var message = _manageService.CreateColor(color);
                return Ok(message);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }

        }

        [HttpPut]
        public ActionResult<ColorDTO> UpdateColor([FromBody] ColorDTO color)
        {
            try
            {
                var message = _manageService.UpdateColor(color);
                return Ok(message);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }
        }
    }
}
