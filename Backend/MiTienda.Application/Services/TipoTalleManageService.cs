using Microsoft.EntityFrameworkCore;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.DataAccess.Repositories;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;

namespace MiTienda.Application.Services
{
    public class TipoTalleManageService : IManageTipoTalleService
    {
        private IRepository<TipoTalle> _tipoTalleRepo;

        public TipoTalleManageService(IRepository<TipoTalle> tipoTalleRepo)
        {
            _tipoTalleRepo = tipoTalleRepo;

        }
        public List<TipoTalleDTO> GetTipoTalles()
        {
            List<TipoTalleDTO> tipoTallees = new List<TipoTalleDTO>();

            foreach (TipoTalle tipoTalle in _tipoTalleRepo.GetAll())
            {
                TipoTalleDTO TipoTalleDTO = new TipoTalleDTO(tipoTalle);
                tipoTallees.Add(TipoTalleDTO);
            }
            return tipoTallees;
        }

        public TipoTalleDTO GetTipoTalleById(int id)
        {
            var tipoTalle = _tipoTalleRepo.GetByID(id).FirstOrDefault();
            return (tipoTalle == null) ? null : new TipoTalleDTO(tipoTalle);

        }

        public string CreateTipoTalle(TipoTalleDTO NewTipoTalle)
        {
            try
            {
                if (NewTipoTalle == null)
                    throw new Exception("No se puede agregar un tipoTalle vacio");

                bool validateExistence = _tipoTalleRepo.GetAll().Any(c => c.Descripcion.ToLower() == NewTipoTalle.Descripcion.ToLower());

                if (validateExistence)
                {
                    throw new Exception("El tipoTalle que desea dar de alta ya existe");
                }
                else
                {
                    TipoTalle tipoTalle = NewTipoTalle.CastearATipoTalle();
                    _tipoTalleRepo.AddObject(tipoTalle);
                    return $"TipoTalle creado correctamente ID: {tipoTalle.Id} , NOMBRE: {tipoTalle.Descripcion}";
                    //return $"TipoTalle creado correctamente ID:";

                }

            }
            catch (Exception ex)
            {
                throw;
            }

        }

        public string UpdateTipoTalle(TipoTalleDTO TipoTalleDTO)
        {
            try
            {
                
                TipoTalle existingTipoTalle = _tipoTalleRepo.GetByID(TipoTalleDTO.IdTipoTalle).FirstOrDefault(); //

                if (existingTipoTalle == null)
                {
                    throw new Exception($"No se encontró ningún tipoTalle con ID: {TipoTalleDTO.IdTipoTalle}");
                }
                existingTipoTalle.Descripcion = TipoTalleDTO.Descripcion;
                _tipoTalleRepo.Update(existingTipoTalle);

                return $"TipoTalle ID: {existingTipoTalle.Id} actualizado correctamente";
            }
            catch (Exception ex)
            {
                throw new Exception($"Error al actualizar el tipoTalle: {ex.Message}");
            }
        }


    }
}
