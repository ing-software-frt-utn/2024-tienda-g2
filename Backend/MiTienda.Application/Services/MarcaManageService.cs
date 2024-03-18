using Microsoft.EntityFrameworkCore;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.DataAccess.Repositories;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;

namespace MiTienda.Application.Services
{
    public class MarcaManageService : IManageMarcaService
    {
        private IRepository<Marca> _marcaRepo;

        public MarcaManageService(IRepository<Marca> marcaRepo)
        {
            _marcaRepo = marcaRepo;

        }
        public List<MarcaDTO> GetMarcas()
        {
            List<MarcaDTO> marcaes = new List<MarcaDTO>();

            foreach (Marca marca in _marcaRepo.GetAll())
            {
                MarcaDTO MarcaDTO = new MarcaDTO(marca);
                marcaes.Add(MarcaDTO);
            }
            return marcaes;
        }

        public MarcaDTO GetMarcaById(int id)
        {
            var marca = _marcaRepo.GetByID(id).FirstOrDefault();
            return (marca == null) ? null : new MarcaDTO(marca);

        }

        public string CreateMarca(MarcaDTO NewMarca)
        {
            try
            {
                if (NewMarca == null)
                    throw new Exception("No se puede agregar un marca vacio");

                bool validateExistence = _marcaRepo.GetAll().Any(c => c.Nombre.ToLower() == NewMarca.Nombre.ToLower());

                if (validateExistence)
                {
                    throw new Exception("El marca que desea dar de alta ya existe");
                }
                else
                {
                    Marca marca = NewMarca.CastearAMarca();
                    _marcaRepo.AddObject(marca);
                    return $"Marca creado correctamente ID: {marca.Id} , NOMBRE: {marca.Nombre}";
                    //return $"Marca creado correctamente ID:";

                }

            }
            catch (Exception ex)
            {
                throw;
            }

        }

        public string UpdateMarca(MarcaDTO MarcaDTO)
        {
            try
            {
                
                Marca existingMarca = _marcaRepo.GetByID(MarcaDTO.IdMarca).FirstOrDefault(); //

                if (existingMarca == null)
                {
                    throw new Exception($"No se encontró ningún marca con ID: {MarcaDTO.IdMarca}");
                }
                existingMarca.Nombre = MarcaDTO.Nombre;
                _marcaRepo.Update(existingMarca);

                return $"Marca ID: {existingMarca.Id} actualizado correctamente";
            }
            catch (Exception ex)
            {
                throw new Exception($"Error al actualizar el marca: {ex.Message}");
            }
        }



        //public string CreateMarca(string NewMarca)
        //{
        //    try
        //    {
        //        if (NewMarca == null)
        //            throw new Exception("No se puede agregar un marca vacio");

        //        bool validateExistence = _marcaRepo.GetAll().Any(c => c.Nombre.ToLower() == NewMarca.ToLower());

        //        if (validateExistence)
        //        {
        //            throw new Exception("El marca que desea dar de alta ya existe");
        //        }
        //        else
        //        {
        //            Marca marca = new Marca { Nombre = NewMarca };
        //            _marcaRepo.AddObject(marca);
        //            return $"Marca creado correctamente ID: {marca.Id} , NOMBRE: {marca.Nombre}";
        //            //return $"Marca creado correctamente ID:";

        //        }

        //    }
        //    catch (Exception ex)
        //    {
        //        throw;
        //    }

        //}
    }
}
