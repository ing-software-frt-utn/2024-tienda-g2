using MiTienda.Domain.Utilidades;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Principal;

namespace MiTienda.Domain.Entities
{
    public class Vendedor : EntidadPersistible
    {
        public int Legajo { get; set; }
        public string Apellido { get; set; }
        public string Nombre { get; set; }
        public PuntoDeVenta PuntoDeVenta { get; set; }
        public bool State { get; set; }
        public string? userID { get; set; }
    }
}
