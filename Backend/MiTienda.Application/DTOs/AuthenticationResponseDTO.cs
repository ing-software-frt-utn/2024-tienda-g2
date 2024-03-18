using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    public class AuthenticationResponseDTO
    {
        public string Token { get; set; }
        public DateTime Expiracion { get; set; }
        public string Username { get; set; }
        public string Role { get; set; }
        public int idVendedor { get; set; }
        public int idSucursal { get; set; }
        public int idPuntoDeVenta { get; set; }

    }
}
