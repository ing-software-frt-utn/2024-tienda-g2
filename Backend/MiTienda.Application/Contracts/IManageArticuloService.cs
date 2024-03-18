
using MiTienda.Application.DTOs;
using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.Contracts
{
    public interface IManageArticuloService
    {
        List<ArticuloDTO> GetArticulos();
        public ArticuloDTO GetArticuloById(int id);
        public ArticuloDTO GetArticuloByCodigoBarras(string codigo);
        string DeleteArticulo(int idArticulo);
        string UpdateArticulo(ArticuloDTO articulo);
        string CreateArticulo(ArticuloDTO articulo);

    }
}
