
using MiTienda.Application.DTOs;
using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.Contracts
{
    public interface IManageTipoTalleService
    {
        List<TipoTalleDTO> GetTipoTalles();
        public TipoTalleDTO GetTipoTalleById(int id);
        string UpdateTipoTalle(TipoTalleDTO tipoTalle);
        string CreateTipoTalle(TipoTalleDTO tipoTalle);

    }
}
