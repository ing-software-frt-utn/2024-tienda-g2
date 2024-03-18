
using MiTienda.Application.DTOs;
using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.Contracts
{
    public interface IManageTalleService
    {
        List<TalleDTO> GetTalles();
        TalleDTO GetTalleById(int IdOrDni);
        List<TalleDTO> GetTallesByIdTipoTalle(int idTipoTalle);
        List<TalleDTO> GetTallesByTipoTalle(string TipoTalle);
        string CreateTalle(TalleDTO cliente);
        string DeleteTalle(int Id);

    }
}
