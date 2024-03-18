using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.DataAccess.Contexts;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;

namespace MiTienda.Application.Services
{
    public class StockManageService : IManageStockService
    {
        private readonly IRepository<Stock> _stockRepo;

        public StockManageService(IRepository<Stock> stockRepo)
        {
            this._stockRepo = stockRepo;
        }

        public string CreateStock(StockDTO stockDTO)
        {
            if (stockDTO == null)
                throw new Exception("Stock cargado nulo.");


            Stock stock = stockDTO.CrearStock();
            _stockRepo.AddObject(stock);

            return $"Stock creado correctamente ID: {stock.Id} , Articulo: {stock.Articulo}, Talle: {stock.Talle},Color: {stock.Color}";

        }

        public Stock GetStockByID(int ID)
        {
            throw new NotImplementedException();
        }

        public void DeleteStock(StockDTO stockDTO)
        {
            throw new NotImplementedException();
        }

      

        public void UpdateStock(StockDTO stockDTO)
        {
            throw new NotImplementedException();
        }
    }
}
