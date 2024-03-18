using Microsoft.EntityFrameworkCore;
using MiTienda.Application.Contracts;

using MiTienda.Domain.Contracts;
using MiTienda.Domain.Utilidades;
using System.Linq.Expressions;

namespace MiTienda.Application.Services
{
    public class QueryService<T> : IQueryService<T> where T : EntidadPersistible
    {
        private IRepository<T> _repository;
        public QueryService(IRepository<T> repository)
        {
            _repository = repository;
        }
        public IQueryable<T> GetAllWithRelatedData()
        {

            return _repository.GetAll().AsQueryable();
            
        }
        public  IQueryable<T> GetAll()
        {
            return _repository.GetAll().AsQueryable();
        }
        public IQueryable<T> GetBy(Expression<Func<T, bool>> filter)
        {
            return _repository.GetBy(filter).AsQueryable();
        }

    }
}
