using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using MiTienda.DataAccess.Contexts;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Utilidades;

namespace MiTienda.DataAccess.Repositories
{
    public class Repository<T> : IRepository<T> where T : EntidadPersistible
    {
        private readonly MiTiendaContexto _context;
        
        public Repository(MiTiendaContexto context)
        {
            _context = context;
        }
        public IEnumerable<T> GetAll()
        {
            return _context.DbSet<T>();
        }
        //puede devolver varios tambien //EJ: traeme todas los articulos con este idMARCA o idCategoria
        public IEnumerable<T> GetByID(int id)
        {
            return _context.DbSet<T>().Where(x => x.Id == id);
        }
        public IEnumerable<T> GetBy(Expression<Func<T, bool>> filtro)
        {
            return _context.DbSet<T>().Where(filtro);
        }
        public void SaveChanges()
        {
            _context.SaveChangesDB();
        }
        public void AddObject(T item)
        {
            try
            {
                _context.DbSet<T>().Add(item);
                _context.SaveChanges();

            }
            catch (Exception e)
            {
                throw new Exception(e.ToString());
            }
        }
        public void DeleteObject(T item)
        {
            _context.DbSet<T>().Remove(item);
            _context.SaveChanges();
        }
        public void DeleteByID(int id)
        {
            DeleteObject(_context.DbSet<T>().Where<T>(x => x.Id == id).SingleOrDefault());
        }
        public void DropChanges()
        {
            throw new NotImplementedException();
        }
        
        public void Refresh(T item)
        {
            throw new NotImplementedException();
        }
        public void Update(T item)
        {
            _context.DbSet<T>().Update(item);
            _context.SaveChanges();
        }

        public void ComponerReferencia<T, E>(T item, Expression<Func<T, E>> entidad)
            where T : class
            where E : class
        {
            if (item != null)
                _context.RelacionarEntidad(item, entidad);
        }

    }
}
