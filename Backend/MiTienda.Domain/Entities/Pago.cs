using MiTienda.Domain.Utilidades;

namespace MiTienda.Domain.Entities
{
    public class Pago : EntidadPersistible
    {

        public double Monto { get; set; }
        public string Moneda { get; set; }
        public TipoPago TipoPago { get; set; }
        public DateTime FechaPago { get; set; }
        public string? TipoTarjeta { get; set; }
     


        private void RealizarPago()
        {
            throw new NotImplementedException();
        }
        //private void AgregarTarjeta()
        //{
        //    throw new NotImplementedException();
        //}
        //private void AgregarPago()
        //{
        //    throw new NotImplementedException();
        //}
    }
}
