using MiTienda.Domain.Utilidades;

namespace MiTienda.Domain.Entities
{
    public class Stock : EntidadPersistible
    {
        public Talle? Talle { get; set; }
        public Color? Color { get; set; }
        public Articulo? Articulo { get; set; }

        private double GetPrecio()
        {
            throw new NotImplementedException();
        }
    }
}
