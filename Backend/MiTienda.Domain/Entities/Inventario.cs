using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using MiTienda.Domain.Utilidades;

namespace MiTienda.Domain.Entities
{
    public class Inventario : EntidadPersistible
    {
        public int Cantidad { get; set; }
        public Stock Stock { get; set; }
        public Sucursal Sucursal { get; set; }

    }
}
