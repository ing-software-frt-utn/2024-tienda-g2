using MiTienda.Domain.Utilidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Domain.Entities
{
    public class DetallePagoTarjeta : EntidadPersistible
    {
        public string TipoTarjeta { get; set; }
        public string Ticket { get; set; }
    }
}
