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
    public class TipoTalleController : ControllerBase
    {
        private IManageTipoTalleService _manageService;

        public TipoTalleController(IManageTipoTalleService manageService)
        {
            _manageService = manageService;
        }

        #region GETS
        [HttpGet]
        public ActionResult<IEnumerable<TipoTalleDTO>> GetAllTipoTalles()
        {
            try
            {
                var tipoTalles = _manageService.GetTipoTalles();
                return Ok(tipoTalles);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal.");
            }
        }

        [HttpGet("getTipoTalleById")]
        public ActionResult<TipoTalleDTO> GetTipoTalleById(int id)
        {
            try
            {
                var tipoTalle = _manageService.GetTipoTalleById(id);

                if (tipoTalle == null)
                    return NotFound($"No existe el tipoTalle con el id: {id}. Por favor ingrese un id valido.");

                return Ok(tipoTalle);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal. Verifica el id.");
            }

        }

        #endregion


        [HttpPost]
        public ActionResult<TipoTalleDTO> PostTipoTalle(TipoTalleDTO tipoTalle)
        {
            try
            {
                var message = _manageService.CreateTipoTalle(tipoTalle);
                return Ok(message);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }

        }

        [HttpPut]
        public ActionResult<TipoTalleDTO> UpdateTipoTalle([FromBody] TipoTalleDTO tipoTalle)
        {
            try
            {
                var message = _manageService.UpdateTipoTalle(tipoTalle);
                return Ok(message);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }
        }
    }
}
