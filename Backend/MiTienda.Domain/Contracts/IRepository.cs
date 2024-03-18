
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Domain.Contracts
{
    public interface IRepository<T>
    {
        IEnumerable<T> GetAll();
        IEnumerable<T> GetBy(Expression<Func<T, bool>> filtro);
        IEnumerable<T> GetByID(int id);
        void AddObject(T item);
        void DeleteObject(T item);
        void DeleteByID(int id);
        void Update(T item);
        void DropChanges();
        void SaveChanges();
        void Refresh(T item);
        //void Refrescar(EntidadPersistible item);

        void ComponerReferencia<T, E>(T item, Expression<Func<T, E>> entidad)
            where T : class
            where E : class;

        //void ComponerColeccion<T, C>(T item, Expression<Func<T, IEnumerable<C>>> coleccion)
        //    where T : class
        //    where C : class;
    }
}
