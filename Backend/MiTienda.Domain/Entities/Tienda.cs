using MiTienda.Domain.Utilidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Domain.Entities
{
    public class Tienda : EntidadPersistible
    {
        public string Cuil { get; set; }
        public CondicionTributaria CondicionTributaria { get; set; }
    }
}
