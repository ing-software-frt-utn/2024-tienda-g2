using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    public class VentaPostDTO
    {
        public int SucursalID { get; set; }
        //public string FechaVenta { get; set; }
        public int VendedorID { get; set; }
        //public int PagoID { get; set; }
        //public int ClienteID { get; set; }
        //public int TipoComprobanteID { get; set; }
        public int PuntoDeVentaID { get; set; }
        public List<LineaVentaDTO>? LineasVenta{ get; set; }

        public VentaPostDTO()
        {
            //FechaVenta = DateTime.UtcNow.ToString();
        }

        //public Venta CastearAVenta(DateTime fechaVenta,Vendedor vendedor,Pago pago,Cliente cliente,TipoComprobante tipoComprobante,PuntoDeVenta puntoVenta, Sucursal sucursal)
        //{
        //    Venta venta = new Venta() { };

        //    return venta;
        //}


    }

    public class VentaYLineasPostDTO
    {
        public VentaPostDTO Venta { get; set; }
        public List<LineaVentaDTO> LineasVenta { get; set; }
    }

    public class VentaWithPagoAndClientDTO
    {
        public int VentaID { get; set; }
        public int PagoID { get; set; }
        public int ClienteID { get; set; }
    }

}
