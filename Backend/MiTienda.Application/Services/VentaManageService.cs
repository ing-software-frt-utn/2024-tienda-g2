using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.Services
{
    public class VentaManageService : IManageVentaService
    {
        private IRepository<Venta> _ventaRepo;
        private IRepository<Sucursal> _sucursalRepo;
        private IRepository<Vendedor> _vendedorRepo;
        private IRepository<Cliente> _clienteRepo;
        private IRepository<TipoComprobante> _tipoComprobanteRepo;
        private IRepository<PuntoDeVenta> _puntoDeVentaRepo;
        private IRepository<LineaDeVenta> _lineaVentaRepo;//ver si es correcto que se cree aquí
        private IRepository<Pago> _pagoRepo;
        private IQueryService<Stock> _stockQuery;
        private IManageLineasVentaService _manageServiceLinea;
        private IManageClienteService _manageServiceCliente;
        private IManageInventarioService _manageServiceInventario;
        private IRepository<Inventario> _inventarioRepo;

        public VentaManageService(IRepository<Venta> ventaRepo, IRepository<Sucursal> sucursalRepo, IRepository<Vendedor> vendedorRepo, IRepository<Cliente> clienteRepo, IRepository<TipoComprobante> tipoComprobanteRepo, IRepository<PuntoDeVenta> puntoDeVentaRepo, IRepository<LineaDeVenta> lineaVentaRepo, IRepository<Pago> pagoRepo, IQueryService<Stock> stockQuery, IManageLineasVentaService manageServiceLinea, IManageClienteService manageServiceCliente, IManageInventarioService manageServiceInventario, IRepository<Inventario> inventarioRepo)
        {
            _ventaRepo = ventaRepo;
            _sucursalRepo = sucursalRepo;
            _vendedorRepo = vendedorRepo;
            _clienteRepo = clienteRepo;
            _tipoComprobanteRepo = tipoComprobanteRepo;
            _puntoDeVentaRepo = puntoDeVentaRepo;
            _lineaVentaRepo = lineaVentaRepo;
            _pagoRepo = pagoRepo;
            _stockQuery = stockQuery;
            _manageServiceLinea = manageServiceLinea;
            _manageServiceCliente = manageServiceCliente;
            _manageServiceInventario = manageServiceInventario;
            _inventarioRepo = inventarioRepo;
        }



        //private IManagePagoService _manageServicePago;
        //private IRepository<Stock> _stockRepo;



        public int CrearVenta(VentaPostDTO ventaPostDTO)
        {
            if (ventaPostDTO == null)
                throw new Exception("Venta nula.");

            Vendedor vendedor = _vendedorRepo.GetByID(ventaPostDTO.VendedorID).AsQueryable().Include(x => x.PuntoDeVenta).SingleOrDefault();
            Cliente cliente = _clienteRepo.GetBy(x => x.Dni == 0 && x.Apellido == "DefaultUser").AsQueryable().Include(x => x.CondicionTributaria).SingleOrDefault();
            PuntoDeVenta ptoVenta = _puntoDeVentaRepo.GetByID(vendedor.PuntoDeVenta.Id).AsQueryable().Include(x => x.Sucursal).SingleOrDefault();
            Sucursal sucursal = _sucursalRepo.GetByID(ventaPostDTO.SucursalID).SingleOrDefault();
            //TipoComprobante tComprobante = _tipoComprobanteRepo.GetByID(ventaPostDTO.TipoComprobanteID).SingleOrDefault();
            //Pago pago = _pagoRepo.GetByID(ventaPostDTO.PagoID).SingleOrDefault();

            Venta venta = new Venta()
            {
                FechaVenta = DateTime.UtcNow,
                Vendedor = vendedor,
                Pago = null,
                Cliente = cliente,
                TipoComprobante = null,
                PuntoDeVenta = ptoVenta,
                Sucursal = sucursal,
                Importe = 0
            };

            _ventaRepo.AddObject(venta);
            return (venta.Id);
        }

        public string UpdateImporteVenta(int idVenta)
        {
            Venta venta = GetVentaById(idVenta);
            List<LineaDeVenta> detalleVenta = _manageServiceLinea.GetLineasByVentaID(idVenta);
            venta.GetTotal(detalleVenta);
            _ventaRepo.Update(venta);
            return $"La venta {venta.Id} se actualizó correctamente. El importe total es: {venta.Importe} ";
        }
        public string UpdateClienteVenta(int idVenta, int idCliente)
        {
            Venta venta = GetVentaById(idVenta);
            List<LineaDeVenta> detalleVenta = _manageServiceLinea.GetLineasByVentaID(idVenta);
            venta.GetTotal(detalleVenta);
            venta.Cliente = _manageServiceCliente.GetClientByIdOrDni(idCliente);
            _ventaRepo.Update(venta);
            
            return $"La venta {venta.Id} se actualizó correctamente. El importe total es: {venta.Importe} ";
        } 
        
        public string UpdatePagoVenta(int idVenta, Pago pago)
        {
            Venta venta = GetVentaById(idVenta);
            venta.Pago = pago;
            _ventaRepo.Update(venta);
            
            return $"El pago de la venta {venta.Id} se realizó correctamente. ";
        }

        public Venta GetVentaById(int id)
        {
            Venta venta = _ventaRepo.GetByID(id).AsQueryable()
                .Include(x => x.Sucursal)
                .Include(x => x.Vendedor)
                .Include(x => x.Pago)
                .Include(x => x.Pago.TipoPago)
                .Include(x => x.Cliente)
                .Include(x => x.Cliente.CondicionTributaria)
                .Include(x => x.TipoComprobante)
                .Include(x => x.PuntoDeVenta)
                .Include(x => x.PuntoDeVenta.Sucursal)
                .Include(x => x.PuntoDeVenta.Sucursal.Tienda)
                .Include(x => x.PuntoDeVenta.Sucursal.Tienda.CondicionTributaria)
                .SingleOrDefault();

            venta.LineasDeVenta = _lineaVentaRepo.GetBy(x => x.VentaID == venta.Id)
                .AsQueryable()
                .Include(x => x.Stock)
                .Include(x => x.Stock.Articulo)
                .Include(x => x.Stock.Articulo.Marca)
                .Include(x => x.Stock.Articulo.Categoria)
                .Include(x => x.Stock.Color)
                .Include(x => x.Stock.Talle)
                .Include(x => x.Stock.Talle.TipoTalle)
                .ToList();
            return venta;
        }

        public List<Venta> GetVentas()
        {
            return _ventaRepo.GetAll().AsQueryable()
                .Include(x => x.Sucursal)
                .Include(x => x.Vendedor)
                .Include(x => x.Pago)
                .Include(x => x.Pago.TipoPago)
                .Include(x => x.Cliente)
                .Include(x => x.TipoComprobante)
                .Include(x => x.PuntoDeVenta)
                .Include(x => x.PuntoDeVenta.Sucursal)
                .Include(x => x.PuntoDeVenta.Sucursal.Tienda)
                .ToList();
        }
        public List<VentaDTO> GetVentasBySucursal(int idSucursal)
        {
            //List<ReturnInventarioDTO> inventarios = new List<ReturnInventarioDTO>();

            //foreach (Inventario inventario in _inventarioRepo.GetBy(i => i.Id == idInventario).AsQueryable().Include(x => x.Stock).Include(x => x.Sucursal).Include(x => x.Stock.Color).Include(x => x.Stock.Talle).Include(x => x.Stock.Articulo).Include(x => x.Stock.Articulo.Marca).Include(x => x.Stock.Articulo.Categoria).Include(x => x.Stock.Talle.TipoTalle))
            //{
            //    ReturnInventarioDTO InventarioDTO = new ReturnInventarioDTO(inventario);
            //    inventarios.Add(InventarioDTO);
            //}
            //return inventarios.Count > 0 ? inventarios : null;
            throw new NotImplementedException();
        }

        public List<VentaDTO> GetVentasByEmpleado(int idEmpleado)
        {
            throw new NotImplementedException();
        }

        public string UpdateAfterAFIP(int idVenta,string cae, int tipoComprobanteID)
        {
            Venta venta = GetVentaById(idVenta);
            venta.CAE = cae;
            venta.TipoComprobante = _tipoComprobanteRepo.GetByID(tipoComprobanteID).SingleOrDefault();
            foreach (var linea in venta.LineasDeVenta)
            {
                Inventario inventario = _inventarioRepo.GetBy(x => x.Stock.Id == linea.Stock.Id && x.Sucursal.Id == venta.Sucursal.Id).SingleOrDefault();
                _manageServiceInventario.UpdateInventario(inventario.Id, linea.Cantidad);
            }
            _ventaRepo.Update(venta);
            return $"La venta {venta.Id} se actualizó correctamente. El importe total es: {venta.Importe} ";
        }
    }
}
