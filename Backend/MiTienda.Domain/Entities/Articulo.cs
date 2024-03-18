
using MiTienda.Domain.Utilidades;

namespace MiTienda.Domain.Entities
{
    public class Articulo : EntidadPersistible
    {
        public string Descripcion { get; set; }
        public string CodigoBarras { get; set; }
        public double Costo { get; set; }
        public double? MargenGanancia { get; set; }
        public double? PrecioFinal { get; set; }
        public double? NetoGravado { get; set; }
        public double? PorcentajeIVA { get; set; }
        public bool? State { get; set; }
        public Marca Marca { get; set; }
        public Categoria Categoria { get; set; }

        public Articulo()
        {

        }

        public Articulo(string descripcion, string codigoBarras, double costo, double margenGanancia, double? precioFinal, double? netoGravado, double porcentajeIVA, bool state, Marca marca, Categoria categoria)
        {
            Descripcion = descripcion;
            CodigoBarras = codigoBarras;
            Costo = costo;
            MargenGanancia = margenGanancia;
            PrecioFinal = precioFinal;
            NetoGravado = netoGravado;
            PorcentajeIVA = porcentajeIVA;
            State = state;
            Marca = marca;
            Categoria = categoria;
        }

        public void CalcularValores()
        {
            PrecioFinal = Costo * (1 + MargenGanancia);
            NetoGravado = Costo * (MargenGanancia);
        }

        
         

    }
}
