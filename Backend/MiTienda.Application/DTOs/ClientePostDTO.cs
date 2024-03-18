using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    public class ClientePostDTO
    {

        //public int IdCliente { get; set; }
        public int Dni { get; set; }
        public string Cuil { get; set; }
        public string Apellido { get; set; }
        public string Nombre { get; set; }
        public string DescripcionCondTribu { get; set; }

       
    }
}
