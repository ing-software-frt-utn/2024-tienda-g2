using MiTienda.Application.DTOs;
using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.Contracts
{
    public interface IManageVentaService
    {
        Venta GetVentaById(int id);
        List<Venta> GetVentas();
        List<VentaDTO> GetVentasBySucursal(int idSucursal);
        List<VentaDTO> GetVentasByEmpleado(int idEmpleado);
        int CrearVenta(VentaPostDTO venta);
        string UpdateImporteVenta(int idVenta);
        string UpdateClienteVenta(int idVenta, int idCliente);
        string UpdatePagoVenta(int idVenta, Pago pago);
        string UpdateAfterAFIP(int idVenta, string cae, int idCliente);


    }
}
