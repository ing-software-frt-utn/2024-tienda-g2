using Microsoft.EntityFrameworkCore;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.DataAccess.Repositories;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;

namespace MiTienda.Application.Services
{
    public class InventarioManageService : IManageInventarioService
    {
        private IRepository<Inventario> _inventarioRepo;
        private IRepository<CondicionTributaria> _condicionTributariaRepo;

        public InventarioManageService(IRepository<Inventario> inventarioRepo, IRepository<CondicionTributaria> CondicionTributariaRepo)
        {
            _inventarioRepo = inventarioRepo;
            _condicionTributariaRepo = CondicionTributariaRepo;

        }
        public string UpdateInventario(int IdInventario, int cantidadARestar)
        {
            Inventario inventario = _inventarioRepo.GetByID(IdInventario)
                .AsQueryable()
                .Include(x => x.Stock)
                .Include(x => x.Stock.Articulo)
                .SingleOrDefault();

            inventario.Cantidad -= cantidadARestar;
            _inventarioRepo.Update(inventario);

            return $"Se actulizó correctamente el inventario| Articulo: {inventario.Stock.Articulo.Descripcion}, Cantidad de stock: {inventario.Cantidad}";
        }
        public List<ReturnInventarioDTO> GetInventarios(int idSucursal)
        {
            List<ReturnInventarioDTO> inventarios = new List<ReturnInventarioDTO>();

            foreach (Inventario inventario in _inventarioRepo.GetBy(i => i.Sucursal.Id == idSucursal)
                .AsQueryable()
                .Include(x => x.Stock)
                .Include(x => x.Sucursal)
                .Include(x => x.Stock.Color)
                .Include(x => x.Stock.Talle)
                .Include(x => x.Stock.Articulo)
                .Include(x => x.Stock.Articulo.Marca)
                .Include(x => x.Stock.Articulo.Categoria)
                .Include(x => x.Stock.Talle.TipoTalle))
            {
                ReturnInventarioDTO InventarioDTO = new ReturnInventarioDTO(inventario);
                inventarios.Add(InventarioDTO);
            }
            return inventarios;
        }

        public List<ReturnInventarioDTO> GetInventarioById(int idInventario)
        {
            List<ReturnInventarioDTO> inventarios = new List<ReturnInventarioDTO>();

            foreach (Inventario inventario in _inventarioRepo.GetBy(i => i.Id == idInventario).AsQueryable().Include(x => x.Stock).Include(x => x.Sucursal).Include(x => x.Stock.Color).Include(x => x.Stock.Talle).Include(x => x.Stock.Articulo).Include(x => x.Stock.Articulo.Marca).Include(x => x.Stock.Articulo.Categoria).Include(x => x.Stock.Talle.TipoTalle))
            {
                ReturnInventarioDTO InventarioDTO = new ReturnInventarioDTO(inventario);
                inventarios.Add(InventarioDTO);
            }
            return inventarios.Count > 0 ? inventarios : null;
        }

        public List<ReturnInventarioDTO> GetInventarioByCodigoBarra(int IdSucursal, string CodigoBarra)
        {
            List<ReturnInventarioDTO> inventarios = new List<ReturnInventarioDTO>();

            foreach (Inventario inventario in _inventarioRepo.GetBy(i => i.Sucursal.Id == IdSucursal)
               .AsQueryable()
               .Include(x => x.Stock)
               .Include(x => x.Sucursal)
               .Include(x => x.Stock.Color)
               .Include(x => x.Stock.Talle)
               .Include(x => x.Stock.Articulo)
               .Include(x => x.Stock.Articulo.Marca)
               .Include(x => x.Stock.Articulo.Categoria)
               .Include(x => x.Stock.Talle.TipoTalle)
               .Where(x => x.Stock.Articulo.CodigoBarras.Contains(CodigoBarra)))
            {
                ReturnInventarioDTO InventarioDTO = new ReturnInventarioDTO(inventario);
                inventarios.Add(InventarioDTO);
            }
            return inventarios.Count > 0 ? inventarios : null;
        }

        public List<ReturnInventarioDTO> GetInventarioByParams(int IdSucursal, string CodigoBarra, int? IdTalle = null, int? IdTipoTalle = null, int? IdColor = null)
        {
            IQueryable<Inventario> query = _inventarioRepo.GetBy(i => i.Sucursal.Id == IdSucursal)
                .AsQueryable()
               .Include(x => x.Stock)
               .Include(x => x.Sucursal)
               .Include(x => x.Stock.Color)
               .Include(x => x.Stock.Talle)
               .Include(x => x.Stock.Articulo)
               .Include(x => x.Stock.Articulo.Marca)
               .Include(x => x.Stock.Articulo.Categoria)
               .Include(x => x.Stock.Talle.TipoTalle)
               .Where(x => x.Stock.Articulo.CodigoBarras.Contains(CodigoBarra));

            if (IdTalle != null)
            {
                query = query.Where(x => x.Stock.Talle.Id == IdTalle);
            }

            if (IdTipoTalle != null)
            {
                query = query.Where(x => x.Stock.Talle.TipoTalle.Id == IdTipoTalle);
            }

            if (IdColor != null)
            {
                query = query.Where(x => x.Stock.Color.Id == IdColor);
            }

            List<ReturnInventarioDTO> inventarios = query.Select(inventario => new ReturnInventarioDTO(inventario)).ToList();
            return inventarios.Count > 0 ? inventarios : null;
        }

       


        //public List<InventarioDTO> GetInventariosByNombreOrCuil(string NombreorCuil)
        //{
        //    //List<InventarioDTO> inventarios = new List<InventarioDTO>();

        //    //foreach (Inventario inventario in _inventarioRepo.GetBy(c => c.Nombre.Contains(NombreorCuil) || c.Apellido.Contains(NombreorCuil) || c.Cuil.Contains(NombreorCuil)).AsQueryable().Include(x => x.CondicionTributaria).ToList())
        //    //{
        //    //    InventarioDTO InventarioDTO = new InventarioDTO(inventario);
        //    //    inventarios.Add(InventarioDTO);
        //    //}
        //    //return inventarios.Count > 0 ? inventarios : null;
        //    return null;
        //}


        //public string CreateInventario(InventarioDTO NewInventario)
        //{
        //    try
        //    {
        //        if (NewInventario == null)
        //            throw new Exception("No se puede agregar un inventario vacio");

        //        bool validateExistence = _inventarioRepo.GetAll().Any(c => c.Dni == NewInventario.Dni);

        //        if (validateExistence)
        //        {
        //            throw new Exception("El inventario que desea dar de alta ya existe");
        //        }
        //        else
        //        {
        //            Inventario inventario = NewInventario.CastearAInventario(_condicionTributariaRepo.GetByID(NewInventario.IdCondicionTrib).SingleOrDefault());
        //            _inventarioRepo.AddObject(inventario);
        //            return $"Inventario creado correctamente ID: {inventario.Id} , NOMBRE COMPLETO: {inventario.Apellido}, {inventario.Nombre}";
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw;
        //    }

        //}

        //public string UpdateInventario(InventarioDTO InventarioDTO)
        //{
        //    try
        //    {
        //        Inventario existingInventario = _inventarioRepo.GetByID(InventarioDTO.IdInventario).SingleOrDefault();

        //        if (existingInventario == null)
        //        {
        //            throw new Exception($"No se encontró ningún inventario con ID: {InventarioDTO.IdInventario}");
        //        }
        //        existingInventario.Dni = InventarioDTO.Dni;
        //        existingInventario.Cuil = InventarioDTO.Cuil;
        //        existingInventario.Apellido = InventarioDTO.Apellido;
        //        existingInventario.Nombre = InventarioDTO.Nombre;
        //        existingInventario.CondicionTributaria = _condicionTributariaRepo.GetByID(InventarioDTO.IdCondicionTrib).SingleOrDefault();
        //        _inventarioRepo.Update(existingInventario);

        //        return $"Inventario ID: {existingInventario.Id} actualizado correctamente";
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception($"Error al actualizar el inventario: {ex.Message}");
        //    }
        //}


        //public string DeleteInventario(int idInventario)
        //{
        //    try
        //    {
        //        if (_inventarioRepo.GetByID(idInventario).Any())
        //        {
        //            _inventarioRepo.DeleteByID(idInventario);
        //            return $"Inventario id: {idInventario} eliminado";
        //        }
        //        else
        //        {
        //            throw new Exception($"No se encontró ningún inventario con ID: {idInventario}");
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception($"Error al actualizar el inventario: {ex.Message}");
        //    }

        //}


    }
}
