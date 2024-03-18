using MiTienda.Domain.Utilidades;

namespace MiTienda.Domain.Entities
{
    public class LineaDeVenta : EntidadPersistible
    {
    

        public int Cantidad { get; set; }
        public Stock Stock { get; set; }
        public int? VentaID { get; set; }
        private void Crear()
        {
            throw new NotImplementedException();

        }
        private double GetPrecio()
        {
            throw new NotImplementedException();
        }
    }
}
