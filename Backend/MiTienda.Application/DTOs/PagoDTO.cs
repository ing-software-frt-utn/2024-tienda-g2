using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.Pkcs;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    public class PagoPostDTO
    {
        public PagoPostDTO()
        {
            
        }
        public int IdTipoPago { get; set; }
        public int IdVenta { get; set; }
        public string? Token { get; set; }
        public string? TipoTarjeta { get; set; }

    }
    public class PagoReturnDTO
    {

        public int IdTipoPago { get; set; }
        public string TipoPago { get; set; }
        public double Monto { get; set; }
        public string Moneda { get; set; }

        public DateTime FechaPago { get; set; }
        public string TipoTarjeta { get; set; }
       
    }
}
