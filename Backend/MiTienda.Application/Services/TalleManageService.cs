using Microsoft.EntityFrameworkCore;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.DataAccess.Repositories;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;

namespace MiTienda.Application.Services
{
    public class TalleManageService : IManageTalleService
    {
        private IRepository<Talle> _talleRepo;
        private IRepository<TipoTalle> _tipoTalle;

        public TalleManageService(IRepository<Talle> talleRepo, IRepository<TipoTalle> TipoTalleRepo)
        {
            _talleRepo = talleRepo;
            _tipoTalle = TipoTalleRepo;

        }
        public List<TalleDTO> GetTalles()
        {
            List<TalleDTO> talles = new List<TalleDTO>();

            foreach (Talle talle in _talleRepo.GetAll().AsQueryable().Include(x => x.TipoTalle))
            {
                TalleDTO TalleDTO = new TalleDTO(talle);
                talles.Add(TalleDTO);
            }
            return talles;
        }

        public TalleDTO GetTalleById(int id)
        {
            TalleDTO talle = new TalleDTO(_talleRepo.GetByID(id).AsQueryable().Include(x => x.TipoTalle).SingleOrDefault());
            return (talle == null) ? null : talle;

        }

        public List<TalleDTO> GetTallesByIdTipoTalle(int idTipoTalle)
        {
            List<TalleDTO> talles = new List<TalleDTO>();

            foreach (Talle talle in _talleRepo.GetBy(t => t.TipoTalle.Id == idTipoTalle).AsQueryable().Include(x => x.TipoTalle).ToList())
            {
                TalleDTO TalleDTO = new TalleDTO(talle);
                talles.Add(TalleDTO);
            }
            return talles.Count > 0 ? talles : null;
        }

        public List<TalleDTO> GetTallesByTipoTalle(string TipoTalle)
        {
            List<TalleDTO> talles = new List<TalleDTO>();

            foreach (Talle talle in _talleRepo.GetBy(t => t.TipoTalle.Descripcion.Contains(TipoTalle)).AsQueryable().Include(x => x.TipoTalle).ToList())
            {
                TalleDTO TalleDTO = new TalleDTO(talle);
                talles.Add(TalleDTO);
            }
            return talles.Count > 0 ? talles : null;
        }


        public string CreateTalle(TalleDTO NewTalle)
        {
            try
            {
                if (NewTalle == null)
                    throw new Exception("No se puede agregar un talle vacio");

                bool validateExistence = _talleRepo.GetAll().Any(t => t.Id == NewTalle.IdTalle);

                if (validateExistence)
                {
                    throw new Exception("El talle que desea dar de alta ya existe");
                }
                else
                {
                    Talle talle = NewTalle.CastearATalle(_tipoTalle.GetByID(NewTalle.IdTipoTalle).SingleOrDefault());
                    _talleRepo.AddObject(talle);
                    return $"Talle creado correctamente ID: {talle.Id} , Talle: {talle.TalleArticulo} perteneciente al tipo : {talle.TipoTalle.Descripcion}";
                }
            }
            catch (Exception ex)
            {
                throw;
            }

        }

        //public string UpdateTalle(TalleDTO TalleDTO)
        //{
        //    try
        //    {
        //        Talle existingTalle = _talleRepo.GetByID(TalleDTO.IdTalle).SingleOrDefault();

        //        if (existingTalle == null)
        //        {
        //            throw new Exception($"No se encontró ningún talle con ID: {TalleDTO.IdTalle}");
        //        }
        //        //existingTalle.Dni = TalleDTO.Dni;
        //        //existingTalle.Cuil = TalleDTO.Cuil;
        //        //existingTalle.Apellido = TalleDTO.Apellido;
        //        //existingTalle.Nombre = TalleDTO.Nombre;
        //        //existingTalle.TipoTalle = _tipoTalle.GetByID(TalleDTO.IdCondicionTrib).SingleOrDefault();
        //        //_talleRepo.Update(existingTalle);

        //        return $"Talle ID: {existingTalle.Id} actualizado correctamente";
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception($"Error al actualizar el talle: {ex.Message}");
        //    }
        //}


        public string DeleteTalle(int idTalle)
        {
            try
            {
                if (_talleRepo.GetByID(idTalle).Any())
                {
                    _talleRepo.DeleteByID(idTalle);
                    return $"Talle id: {idTalle} eliminado";
                }
                else
                {
                    throw new Exception($"No se encontró ningún talle con ID: {idTalle}");
                }
            }
            catch (Exception ex)
            {
                throw new Exception($"Error al actualizar el talle: {ex.Message}");
            }

        }

    }
}
