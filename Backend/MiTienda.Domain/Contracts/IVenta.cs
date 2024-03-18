using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Domain.Contracts
{
    public interface IVenta
    {
        public void GetTotal(List<LineaDeVenta> detallesVenta);
        public List<LineaDeVenta> GetLineas();
        public void AgregarArticulos(List<LineaDeVenta> lineas);
        public void asociarCliente(Cliente cliente);
        public void AgregarMetodoDePago(TipoPago metodoPago);
        public void RealizarPagoEfectivo(Pago pagoEfectivo);
        public void RealizarPagoTarjeta(Pago pagoTarjeta);
        public void ConfirmarVenta(Venta venta); // ver 
        public void AsociarTipoComprobante(TipoComprobante comprobante);
        public void SetID(int id);
        public int GetID();

    }
}
