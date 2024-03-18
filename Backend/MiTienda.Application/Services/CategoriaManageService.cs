using Microsoft.EntityFrameworkCore;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.DataAccess.Repositories;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;

namespace MiTienda.Application.Services
{
    public class CategoriaManageService : IManageCategoriaService
    {
        private IRepository<Categoria> _categoriaRepo;

        public CategoriaManageService(IRepository<Categoria> categoriaRepo)
        {
            _categoriaRepo = categoriaRepo;

        }
        public List<CategoriaDTO> GetCategorias()
        {
            List<CategoriaDTO> categoriaes = new List<CategoriaDTO>();

            foreach (Categoria categoria in _categoriaRepo.GetAll())
            {
                CategoriaDTO CategoriaDTO = new CategoriaDTO(categoria);
                categoriaes.Add(CategoriaDTO);
            }
            return categoriaes;
        }

        public CategoriaDTO GetCategoriaById(int id)
        {
            var categoria = _categoriaRepo.GetByID(id).FirstOrDefault();
            return (categoria == null) ? null : new CategoriaDTO(categoria);

        }

        public string CreateCategoria(CategoriaDTO NewCategoria)
        {
            try
            {
                if (NewCategoria == null)
                    throw new Exception("No se puede agregar un categoria vacio");

                bool validateExistence = _categoriaRepo.GetAll().Any(c => c.Descripcion.ToLower() == NewCategoria.Descripcion.ToLower());

                if (validateExistence)
                {
                    throw new Exception("El categoria que desea dar de alta ya existe");
                }
                else
                {
                    Categoria categoria = NewCategoria.CastearACategoria();
                    _categoriaRepo.AddObject(categoria);
                    return $"Categoria creado correctamente ID: {categoria.Id} , NOMBRE: {categoria.Descripcion}";
                    //return $"Categoria creado correctamente ID:";

                }

            }
            catch (Exception ex)
            {
                throw;
            }

        }

        public string UpdateCategoria(CategoriaDTO CategoriaDTO)
        {
            try
            {
                
                Categoria existingCategoria = _categoriaRepo.GetByID(CategoriaDTO.IdCategoria).FirstOrDefault(); //

                if (existingCategoria == null)
                {
                    throw new Exception($"No se encontró ningún categoria con ID: {CategoriaDTO.IdCategoria}");
                }
                existingCategoria.Descripcion = CategoriaDTO.Descripcion;
                _categoriaRepo.Update(existingCategoria);

                return $"Categoria ID: {existingCategoria.Id} actualizado correctamente";
            }
            catch (Exception ex)
            {
                throw new Exception($"Error al actualizar el categoria: {ex.Message}");
            }
        }



        //public string CreateCategoria(string NewCategoria)
        //{
        //    try
        //    {
        //        if (NewCategoria == null)
        //            throw new Exception("No se puede agregar un categoria vacio");

        //        bool validateExistence = _categoriaRepo.GetAll().Any(c => c.Descripcion.ToLower() == NewCategoria.ToLower());

        //        if (validateExistence)
        //        {
        //            throw new Exception("El categoria que desea dar de alta ya existe");
        //        }
        //        else
        //        {
        //            Categoria categoria = new Categoria { Descripcion = NewCategoria };
        //            _categoriaRepo.AddObject(categoria);
        //            return $"Categoria creado correctamente ID: {categoria.Id} , NOMBRE: {categoria.Descripcion}";
        //            //return $"Categoria creado correctamente ID:";

        //        }

        //    }
        //    catch (Exception ex)
        //    {
        //        throw;
        //    }

        //}
    }
}
