using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    public class ArticuloDTO
    {
        public ArticuloDTO()
        {}

        public ArticuloDTO(Articulo articulo)
        {
            if (articulo is null)
                return;

            Id = articulo.Id;
            Descripcion = articulo.Descripcion;
            CodigoBarras = articulo.CodigoBarras;
            Costo = articulo.Costo;
            MargenGanancia = articulo.MargenGanancia;
            PrecioFinal = articulo.PrecioFinal;
            NetoGravado = articulo.NetoGravado;
            PorcentajeIVA = articulo.PorcentajeIVA;
            CategoriaId = articulo.Categoria.Id;
            CategoriaDescripcion = articulo.Categoria.Descripcion;
            MarcaId = articulo.Marca.Id;
            MarcaNombre = articulo.Marca.Nombre;
        }

        public int Id { get; set; }
        public string Descripcion { get; set; }
        [RegularExpression("^\\d{4}-\\d{4}$", ErrorMessage = "El código no cumple con el formato. Debe estar compuesto por: 4 numeros; 1 guion medio; 4 numeros ")]
        public string CodigoBarras { get; set; }
        public double Costo { get; set; }
        public double? MargenGanancia { get; set; }
        public double? PrecioFinal { get; set; }
        public double? NetoGravado { get; set; }
        public double? PorcentajeIVA { get; set; }

        public int CategoriaId { get; set; }
        public int MarcaId { get; set; }
        public string MarcaNombre { get; set; }
        public string CategoriaDescripcion { get; set; }

        public Articulo CastearAArticulo(Marca marca, Categoria categoria)
        {
            Articulo articulo = new Articulo();
            //articulo.Id = Id;
            articulo.Descripcion = Descripcion;
            articulo.CodigoBarras = CodigoBarras;
            articulo.Costo = Costo;
            articulo.MargenGanancia = MargenGanancia;
            articulo.PrecioFinal = PrecioFinal;
            articulo.NetoGravado = NetoGravado;
            articulo.PorcentajeIVA = PorcentajeIVA;
            articulo.Marca = marca;
            articulo.Categoria = categoria;
            articulo.CalcularValores();

            return articulo;
        }

    }
}

