
using MiTienda.Application.DTOs;
using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.Contracts
{
    public interface IManagePagoService
    {
        //List<TalleDTO> GetTalles();
        PagoReturnDTO GetPagoById(int idPago);
        Pago GetPayById(int idPago);
        //List<TalleDTO> GetTallesByIdTipoTalle(int idTipoTalle);
        //List<TalleDTO> GetTallesByTipoTalle(string TipoTalle);
        Pago  CreatePago(PagoPostDTO pago);
        //string DeleteTalle(int Id);

    }
}
