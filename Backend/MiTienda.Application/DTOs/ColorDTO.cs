using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    public class ColorDTO
    {
        public ColorDTO()
        {
            
        }
        public ColorDTO(Color color)
        {
            IdColor = color.Id;
            Nombre = color.Nombre;
        }

        public int IdColor { get; set; }
        public string Nombre { get; set; }

        public Color CastearAColor()
        {
            Color color = new Color();
            color.Nombre = Nombre;
            return color;
        }
    }
}
