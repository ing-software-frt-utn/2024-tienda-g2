using Microsoft.AspNetCore.Mvc;
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
    public class TalleController : ControllerBase
    {
        private IManageTalleService _manageService;

        public TalleController(IManageTalleService manageService)
        {
            _manageService = manageService;
        }

        #region GETS
        [HttpGet]
        public ActionResult<IEnumerable<TalleDTO>> GetAllTalles()
        {
            try
            {
                var talles = _manageService.GetTalles();
                return Ok(talles);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal.");
            }
        }

        [HttpGet("getTalleById")]
        public ActionResult<TalleDTO> GetTalleById(int idTalle)
        {
            try
            {
                var talle = _manageService.GetTalleById(idTalle);

                if (talle == null)
                    return NotFound($"No existe el talle buscado. Por favor reintente su busqueda con un valor diferente.");

                return Ok(talle);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal. Verifica el id.");
            }

        }

        [HttpGet("getTallesByIdTipoTalle")]
        public ActionResult<List<TalleDTO>> GetTallesByIdTipoTalle(int idTipoTalle)
        {
            try
            {
                var talles = _manageService.GetTallesByIdTipoTalle(idTipoTalle);

                if (talles == null)
                    return NotFound($"No existe el Id: {idTipoTalle} para ese Tipo de talle buscado. Por favor reintente su busqueda con un valor diferente.");

                return Ok(talles);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal. Verifica el id.");
            }

        }

        [HttpGet("getTallesByNombreTipoTalle")]
        public ActionResult<List<TalleDTO>> GetTalleByNombreTipoTalle(string TipoTalle)
        {
            try
            {
                List<TalleDTO> talles = _manageService.GetTallesByTipoTalle(TipoTalle);

                if (talles == null)
                    return NotFound($"No existen talles para el TipoTalle {TipoTalle}. Por favor reintente su busqueda con un valor diferente.");

                return Ok(talles);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal. Verifica el TipoTalle.");
            }

        }

        #endregion


        [HttpPost]
        public ActionResult<TalleDTO> PostTalle(TalleDTO newTalle)
        {
            try
            {
                var message = _manageService.CreateTalle(newTalle);
                return Ok(message);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }

        }

        //[HttpPut]
        //public ActionResult<TalleDTO> UpdateTalle([FromBody] TalleDTO talle)
        //{
        //    try
        //    {
        //        var message = _manageService.(talle);
        //        return Ok(message);
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
        //    }
        //}

        [HttpDelete("deleteTalle")]
        public ActionResult<int> DeleteTalle(int idTalle)
        {
            try
            {
                var message = _manageService.DeleteTalle(idTalle);
                return Ok(message);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }
        }
    }
}
