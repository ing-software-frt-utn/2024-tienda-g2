using MiTienda.Domain.Utilidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.Contracts
{
    public interface IQueryService<T> where T : EntidadPersistible
    {
        IQueryable<T> GetAll();
        IQueryable<T> GetAllWithRelatedData();
        IQueryable<T> GetBy(Expression<Func<T, bool>> filtro);

    }
}
