using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    public class MarcaDTO
    {
        public MarcaDTO()
        {

        }
        public MarcaDTO(Marca Marca)
        {
            IdMarca = Marca.Id;
            Nombre = Marca.Nombre;
        }

        public int IdMarca { get; set; }
        public string Nombre { get; set; }

        public Marca CastearAMarca()
        {
            Marca Marca = new Marca();
            Marca.Nombre = Nombre;
            return Marca;
        }
    }
}
