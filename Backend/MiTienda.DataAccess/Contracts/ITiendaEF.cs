using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.DataAccess.Contracts
{
    public interface ITiendaEF
    {
        //Se usa como medio para crear DBSetGenericos para todas las entidades
        DbSet<T> DbSet<T>() where T : class;
        void SetModificado<T>(T item) where T : class;
        void Refrescar<T>(T item) where T : class;
        void SaveChangesDB();
    }
}
