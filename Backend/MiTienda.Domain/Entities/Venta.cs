using MiTienda.Domain.Contracts;
using MiTienda.Domain.Utilidades;

namespace MiTienda.Domain.Entities
{
    public class Venta : EntidadPersistible, IVenta
    {
        public Sucursal? Sucursal { get; set; }

        public DateTime FechaVenta { get; set; }

        public Vendedor? Vendedor { get; set; }

        public Pago? Pago { get; set; }

        public Cliente? Cliente { get; set; }

        public TipoComprobante? TipoComprobante { get; set; }

        public PuntoDeVenta? PuntoDeVenta { get; set; }

        public List<LineaDeVenta> LineasDeVenta { get; set; }//sacar el nulleable despues que cree lineas de venta para probar
        public double? Importe { get; set; }
        public string? CAE { get; set; }


        public void GetTotal(List<LineaDeVenta> detallesVenta)
        {
            if (detallesVenta is null)
                return;
            Importe = 0;
            foreach (LineaDeVenta item in detallesVenta)
            {
                item.Stock.Articulo.CalcularValores();
                Importe += (double)(item.Cantidad * item.Stock.Articulo.PrecioFinal);
            }
        }

        public void AgregarArticulos(List<LineaDeVenta> lineas)
        {
            LineasDeVenta = lineas;
        }

        public void AgregarMetodoDePago(TipoPago metodoPago)
        {
            throw new NotImplementedException();
        }

        public void asociarCliente(Cliente cliente)
        {
            throw new NotImplementedException();
        }

        public void AsociarTipoComprobante(TipoComprobante comprobante)
        {
            throw new NotImplementedException();
        }

        public void ConfirmarVenta(Venta venta)
        {
            throw new NotImplementedException();
        }

        public void RealizarPagoEfectivo(Pago pagoEfectivo)
        {
            throw new NotImplementedException();
        }

        public void RealizarPagoTarjeta(Pago pagoTarjeta)
        {
            throw new NotImplementedException();
        }

        public List<LineaDeVenta> GetLineas()
        {
            return LineasDeVenta;
        }

        public void SetID(int id)
        {
            Id = id;
        }

        public int GetID()
        {
            return Id;
        }
    }
}
