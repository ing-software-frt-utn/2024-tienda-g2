using Microsoft.EntityFrameworkCore;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.DataAccess.Repositories;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;

namespace MiTienda.Application.Services
{
    public class ColorManageService : IManageColorService
    {
        private IRepository<Color> _colorRepo;

        public ColorManageService(IRepository<Color> colorRepo)
        {
            _colorRepo = colorRepo;

        }


        public List<ColorDTO> GetColors()
        {
            List<ColorDTO> colores = new List<ColorDTO>();

            foreach (Color color in _colorRepo.GetAll())
            {
                ColorDTO colorDTO = new ColorDTO(color);
                colores.Add(colorDTO);
            }
            return colores;
        }

        public ColorDTO GetColorById(int id)
        {
            var color = _colorRepo.GetByID(id).FirstOrDefault();
            return (color == null) ? null : new ColorDTO(color);

        }

        public string CreateColor(ColorDTO NewColor)
        {
            try
            {
                if (NewColor == null)
                    throw new Exception("No se puede agregar un color vacio");

                bool validateExistence = _colorRepo.GetAll().Any(c => c.Nombre.ToLower() == NewColor.Nombre.ToLower());

                if (validateExistence)
                {
                    throw new Exception("El color que desea dar de alta ya existe");
                }
                else
                {
                    Color color = NewColor.CastearAColor();
                    _colorRepo.AddObject(color);
                    return $"Color creado correctamente ID: {color.Id} , NOMBRE: {color.Nombre}";
                    //return $"Color creado correctamente ID:";

                }

            }
            catch (Exception ex)
            {
                throw;
            }

        }

        public string UpdateColor(ColorDTO colorDTO)
        {
            try
            {
                
                Color existingColor = _colorRepo.GetByID(colorDTO.IdColor).FirstOrDefault(); //

                if (existingColor == null)
                {
                    throw new Exception($"No se encontró ningún color con ID: {colorDTO.IdColor}");
                }
                existingColor.Nombre = colorDTO.Nombre;
                _colorRepo.Update(existingColor);

                return $"Color ID: {existingColor.Id} actualizado correctamente";
            }
            catch (Exception ex)
            {
                throw new Exception($"Error al actualizar el color: {ex.Message}");
            }
        }



        //public string CreateColor(string NewColor)
        //{
        //    try
        //    {
        //        if (NewColor == null)
        //            throw new Exception("No se puede agregar un color vacio");

        //        bool validateExistence = _colorRepo.GetAll().Any(c => c.Nombre.ToLower() == NewColor.ToLower());

        //        if (validateExistence)
        //        {
        //            throw new Exception("El color que desea dar de alta ya existe");
        //        }
        //        else
        //        {
        //            Color color = new Color { Nombre = NewColor };
        //            _colorRepo.AddObject(color);
        //            return $"Color creado correctamente ID: {color.Id} , NOMBRE: {color.Nombre}";
        //            //return $"Color creado correctamente ID:";

        //        }

        //    }
        //    catch (Exception ex)
        //    {
        //        throw;
        //    }

        //}
    }
}
