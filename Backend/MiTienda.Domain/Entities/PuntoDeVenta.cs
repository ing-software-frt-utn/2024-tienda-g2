using MiTienda.Domain.Utilidades;

namespace MiTienda.Domain.Entities
{
    public class PuntoDeVenta : EntidadPersistible
    {
        public int Numero { get; set; }
        public Sucursal Sucursal { get; set; }

        private void AgregarVenta()
        {
            throw new NotImplementedException();
        }
    
    }
}
