
using MiTienda.Application.DTOs;
using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.Contracts
{
    public interface IManageMarcaService
    {
        List<MarcaDTO> GetMarcas();
        public MarcaDTO GetMarcaById(int id);
        string UpdateMarca(MarcaDTO marca);
        string CreateMarca(MarcaDTO marca);

    }
}
