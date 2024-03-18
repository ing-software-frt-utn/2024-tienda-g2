using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    public class CategoriaDTO
    {
        public CategoriaDTO()
        {

        }
        public CategoriaDTO(Categoria Categoria)
        {
            IdCategoria = Categoria.Id;
            Descripcion = Categoria.Descripcion;
        }

        public int IdCategoria { get; set; }
        public string Descripcion { get; set; }

        public Categoria CastearACategoria()
        {
            Categoria Categoria = new Categoria();
            Categoria.Descripcion = Descripcion;
            return Categoria;
        }
    }
}
