using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    public class StockDTO
    {
        public int Id { get; set; }
        public int Articulo { get; set; }
        public int Color { get; set; }
        public int Talle { get; set; }

        public StockDTO() { }
        public Stock CrearStock()
        {
            Stock stock = new Stock();
            stock.Id = Id;
            stock.Articulo = new Articulo(){Id = Articulo,
                Descripcion = "",CodigoBarras = "", Costo = 0,MargenGanancia = 0,PrecioFinal=0,NetoGravado=0,PorcentajeIVA=0,
                Marca = new Marca() { Id = 1,Nombre = ""},Categoria = new Categoria() { Id = 1,Descripcion = ""}
            };
            stock.Talle = new Talle() { Id = 1 , TalleArticulo = "",TipoTalle = new TipoTalle() {Descripcion = ""  } };
            stock.Color = new Color() { Id = 1,Nombre = "" };
            return stock;
        }
    }
}
