using Microsoft.EntityFrameworkCore;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.Services
{
    public class LineaVentaManageService : IManageLineasVentaService
    {
    
        private IRepository<LineaDeVenta> _lineaVentaRepo;
        private IQueryService<Stock> _stockQuery;

        public LineaVentaManageService(IRepository<LineaDeVenta> lineaVentaRepo, IQueryService<Stock> stockQuery)
        {
            _lineaVentaRepo = lineaVentaRepo;
            _stockQuery = stockQuery;
        }

        public string CrearLineasVenta(List<LineaDeVenta> lineasDeVenta)
        {
            LineaDeVenta lineaVenta;

            foreach (var linea in lineasDeVenta)
            {
                lineaVenta = new LineaDeVenta();
                lineaVenta.Cantidad = linea.Cantidad;
                lineaVenta.VentaID = linea.VentaID;
                lineaVenta.Stock = linea.Stock;
                _lineaVentaRepo.AddObject(lineaVenta);
            }
            return $"Linea de venta creada correctamente ";

        }


        public void CrearLineaVenta(LineaDeVenta lineaDeVenta)
        {
            _lineaVentaRepo.AddObject(lineaDeVenta);
        }

        public List<LineaDeVenta> GetLineas()
        {
            throw new NotImplementedException();
        }

        public List<LineaDeVenta> GetLineasByVentaID(int idVenta)
        {
            return _lineaVentaRepo.GetBy(x => x.VentaID == idVenta).AsQueryable()
                .Include(x => x.Stock)
                .Include(x => x.Stock.Articulo)
                .ToList();
        }
    }
}
