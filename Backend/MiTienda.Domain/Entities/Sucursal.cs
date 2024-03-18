using MiTienda.Domain.Utilidades;

namespace MiTienda.Domain.Entities
{
    public class Sucursal : EntidadPersistible
    {
        public int Numero { get; set; }

        public string Nombre { get; set; }
        public Tienda Tienda { get; set; }

        private int ObtenerCantidadStock()
        {
            throw new NotImplementedException();
        }
    }
}
