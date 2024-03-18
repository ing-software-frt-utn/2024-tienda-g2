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
    public class CategoriaController : ControllerBase
    {
        private IManageCategoriaService _manageService;

        public CategoriaController(IManageCategoriaService manageService)
        {
            _manageService = manageService;
        }

        #region GETS
        [HttpGet]
        public ActionResult<IEnumerable<CategoriaDTO>> GetAllCategorias()
        {
            try
            {
                var categorias = _manageService.GetCategorias();
                return Ok(categorias);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal.");
            }
        }

        [HttpGet("getCategoriaById")]
        public ActionResult<CategoriaDTO> GetCategoriaById(int id)
        {
            try
            {
                var categoria = _manageService.GetCategoriaById(id);

                if (categoria == null)
                    return NotFound($"No existe el categoria con el id: {id}. Por favor ingrese un id valido.");

                return Ok(categoria);
            }
            catch (Exception)
            {
                return StatusCode(400, "Algo salió mal. Verifica el id.");
            }

        }

        #endregion


        [HttpPost]
        public ActionResult<CategoriaDTO> PostCategoria(CategoriaDTO categoria)
        {
            try
            {
                var message = _manageService.CreateCategoria(categoria);
                return Ok(message);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }

        }

        [HttpPut]
        public ActionResult<CategoriaDTO> UpdateCategoria([FromBody] CategoriaDTO categoria)
        {
            try
            {
                var message = _manageService.UpdateCategoria(categoria);
                return Ok(message);
            }
            catch (Exception ex)
            {
                return StatusCode(400, $"Algo salió mal. Detalles: {ex.Message}");
            }
        }
    }
}
