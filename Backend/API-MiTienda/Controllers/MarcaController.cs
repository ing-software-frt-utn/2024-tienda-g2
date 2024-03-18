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
    public class MarcaController : ControllerBase
    {
        private IManageMarcaService _manageService;

        public MarcaController(IManageMarcaService manageService)
        {
            _manageService = manageService;
        }

        #region GETS
        [HttpGet]
        public ActionResult<IEnumerable<MarcaDTO>> GetAllMarcas()
        {
            try
            {
                var marcaes = _manageService.GetMarcas();
                return Ok(marcaes);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal.");
            }
        }

        [HttpGet("getMarcaById")]
        public ActionResult<MarcaDTO> GetMarcaById(int id)
        {
            try
            {
                var marca = _manageService.GetMarcaById(id);

                if (marca == null)
                    return NotFound($"No existe el marca con el id: {id}. Por favor ingrese un id valido.");

                return Ok(marca);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal. Verifica el id.");
            }

        }

        #endregion


        [HttpPost]
        public ActionResult<MarcaDTO> PostMarca(MarcaDTO marca)
        {
            try
            {
                var message = _manageService.CreateMarca(marca);
                return Ok(message);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }

        }

        [HttpPut]
        public ActionResult<MarcaDTO> UpdateMarca([FromBody] MarcaDTO marca)
        {
            try
            {
                var message = _manageService.UpdateMarca(marca);
                return Ok(message);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }
        }
    }
}
