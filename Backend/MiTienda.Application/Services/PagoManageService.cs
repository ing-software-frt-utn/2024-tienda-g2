using Microsoft.EntityFrameworkCore;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.DataAccess.Repositories;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;

namespace MiTienda.Application.Services
{
    public class PagoManageService : IManagePagoService
    {
        private IRepository<Pago> _pagoRepo;
        private IRepository<TipoPago> _tipoPago;
        private IManageVentaService _manageVenta;

        public PagoManageService(IRepository<Pago> pagoRepo, IRepository<TipoPago> tipoPago, IManageVentaService manageVenta)
        {
            _pagoRepo = pagoRepo;
            _tipoPago = tipoPago;
            _manageVenta = manageVenta;
        }

        public PagoReturnDTO GetPagoById(int id)
        {
            PagoReturnDTO pagoDTO = new PagoReturnDTO();
            var pago = _pagoRepo.GetByID(id).AsQueryable().Include(x => x.TipoPago).SingleOrDefault();
            pagoDTO.IdTipoPago = pago.TipoPago.Id;
            pagoDTO.TipoPago = pago.TipoPago.Descripcion;
            pagoDTO.Monto = pago.Monto;
            pagoDTO.Moneda = pago.Moneda;
            pagoDTO.FechaPago = pago.FechaPago;
            pagoDTO.TipoTarjeta = pago.TipoPago.Id != 7 ? pago.TipoTarjeta: "";//ver

            return (pago == null) ? null : pagoDTO;
        }

        public Pago GetPayById(int id)
        {
            Pago pago = new Pago();
            pago = _pagoRepo.GetByID(id).AsQueryable().Include(x => x.TipoPago).SingleOrDefault();
            return (pago == null) ? null : pago;
        }





        public Pago CreatePago(PagoPostDTO NewPago)
        {
            try
            {
                if (NewPago == null)
                    throw new Exception("No se puede agregar un pago vacio");

                else
                {
                    Venta venta = _manageVenta.GetVentaById(NewPago.IdVenta);

                    Pago pago = new Pago();

                    pago.Monto = (double)venta.Importe;
                    pago.Moneda = "ARS";
                    pago.TipoPago = _tipoPago.GetByID(NewPago.IdTipoPago).SingleOrDefault();
                    pago.FechaPago = DateTime.Now;
                    pago.TipoTarjeta = pago.TipoPago.Id == 1 ? null : NewPago.TipoTarjeta;

                    _pagoRepo.AddObject(pago);
                    return pago;
                }
            }
            catch (Exception ex)
            {
                throw;
            }
           

        }

     
        
    }
}
