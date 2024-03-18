using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    public class VentaDTO
    {
        public VentaDTO(Venta venta)
        {
            IdVenta = venta.Id;
            SucursalID = venta.Sucursal.Id;
            SucursalNombre = venta.Sucursal.Nombre;
            FechaVenta = venta.FechaVenta.ToString();
            VendedorID = venta.Vendedor.Id;
            VendedorNombre = venta.Vendedor.Nombre;
            //PagoID = venta.;
            //PagoMonto = venta.;
            //PagoMoneda = venta.;
            //PagoTipoPagoDescripcion = venta.;
            ClienteID = venta.Cliente.Id;
            ClienteDNI = venta.Cliente.Dni;
            ClienteNombre = venta.Cliente.Nombre;
            //TipoComprobanteID = venta.;
            //TipoComprobante = venta.;
            PuntoDeVentaID = venta.PuntoDeVenta.Id;
            PuntoDeVenta = venta.PuntoDeVenta.Sucursal.Nombre;
        }

        public int? IdVenta{ get; set; }
        public int? SucursalID { get; set; }
        public string? SucursalNombre { get; set; }

        public string? FechaVenta { get; set; }

        public int? VendedorID { get; set; }
        public string? VendedorNombre { get; set; }
        public int? PagoID { get; set; }
        public double? PagoMonto { get; set; }
        public string? PagoMoneda { get; set; }
        public string? PagoTipoPagoDescripcion { get; set; }
        public int? ClienteID { get; set; }
        public int? ClienteDNI { get; set; }
        public string? ClienteNombre { get; set; }
        public int? TipoComprobanteID { get; set; }
        public string? TipoComprobante { get; set; }
        public int? PuntoDeVentaID { get; set; }
        public string? PuntoDeVenta { get; set; }

        public List <LineaVentaDTO> DetallesVenta { get; set; }

        


        public Venta CastearAVenta(DateTime fechaVenta,Vendedor vendedor,Pago pago,Cliente cliente,TipoComprobante tipoComprobante,PuntoDeVenta puntoVenta, Sucursal sucursal)
        {
            Venta venta = new Venta() { };

            return venta;
        }


    }

    
}
