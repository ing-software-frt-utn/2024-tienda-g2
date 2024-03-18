using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.DataAccess.Contexts;

using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;
using System.Collections;

namespace API_MiTienda.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockController : ControllerBase
    {

        private readonly IQueryService<Stock> _queryService;
        private readonly IManageStockService _manageService;

        public StockController(IQueryService<Stock> queryService, IManageStockService manageService)
        {
            _queryService = queryService;
            _manageService = manageService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Stock>> GetAllStocks()
        {
            var stocks = _queryService.GetAllWithRelatedData()
                .Include(s => s.Color)
                .Include(s => s.Articulo)
                .Include(s => s.Talle);

            return Ok(stocks);
        }

        [HttpPost]
        public ActionResult<StockDTO> PostStock([FromBody] StockDTO stock)
        {
            var message = _manageService.CreateStock(stock);
            return Ok(message);
        }
    }
}
