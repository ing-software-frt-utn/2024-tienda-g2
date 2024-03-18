using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    public class CrearInventarioDTO
    {
        public int IdInventario { get; set; }
        public int Cantidad { get; set; }

        public int IdStock { get; set; }

        public int IdSucursal { get; set; }

        public CrearInventarioDTO() { }
        public CrearInventarioDTO(Inventario inventario)
        {
            IdInventario = inventario.Id;
            Cantidad = inventario.Cantidad;
            IdStock = inventario.Stock.Id;
            IdSucursal = inventario.Sucursal.Id;
        }


        public Inventario CastearAInventario(Stock stock, Sucursal sucursal)
        {
            Inventario inventario = new Inventario();
            inventario.Id = IdInventario;
            inventario.Cantidad = Cantidad;
            inventario.Stock = stock;
            inventario.Sucursal = sucursal;

            return inventario;
        }

    }

    public class ReturnInventarioDTO
    {
        public int IdInventario { get; set; }
        public int Cantidad { get; set; }

        public int IdStock { get; set; }
        public string StockColor { get; set; }
        public string StockTalle { get; set; }
        public string StockTalleTipoTalle { get; set; }


        public int IdArticulo { get; set; }

        public string CodigoBarra { get; set; }
        public string ArticuloCategoria { get; set; }
        public string ArticuloDescripcion { get; set; }
        public string ArticuloMarca { get; set; }


        public int IdSucursal { get; set; }
        public string NombreSucursal { get; set; }

        public ReturnInventarioDTO()
        {

        }



        public ReturnInventarioDTO(Inventario inventario)
        {
            IdInventario = inventario.Id;
            Cantidad = inventario.Cantidad;
            IdStock = inventario.Stock.Id;
            StockColor = inventario.Stock.Color.Nombre;
            StockTalle = inventario.Stock.Talle.TalleArticulo;
            StockTalleTipoTalle = inventario.Stock.Talle.TipoTalle.Descripcion;
            IdArticulo = inventario.Stock.Articulo.Id;
            CodigoBarra = inventario.Stock.Articulo.CodigoBarras;
            ArticuloCategoria = inventario.Stock.Articulo.Categoria.Descripcion;
            ArticuloDescripcion = inventario.Stock.Articulo.Descripcion;
            ArticuloMarca = inventario.Stock.Articulo.Marca.Nombre;
            IdSucursal = inventario.Sucursal.Id;
            NombreSucursal = inventario.Sucursal.Nombre;
        }

        public Inventario CastearAInventario(Stock stock, Sucursal sucursal)
        {
            Inventario inventario = new Inventario();
            inventario.Id = IdInventario;
            inventario.Cantidad = Cantidad;
            inventario.Stock.Id = stock.Id;
            inventario.Stock.Color.Nombre = stock.Color.Nombre;
            inventario.Stock.Talle = stock.Talle;


            inventario.Sucursal = sucursal;

            return inventario;
        }

    }
}
