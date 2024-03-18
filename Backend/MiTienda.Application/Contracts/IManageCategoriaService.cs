
using MiTienda.Application.DTOs;
using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.Contracts
{
    public interface IManageCategoriaService
    {
        List<CategoriaDTO> GetCategorias();
        public CategoriaDTO GetCategoriaById(int id);
        string UpdateCategoria(CategoriaDTO categoria);
        string CreateCategoria(CategoriaDTO categoria);

    }
}
