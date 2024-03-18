
using MiTienda.Application.DTOs;
using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.Contracts
{
    public interface IManageColorService
    {
        List<ColorDTO> GetColors();
        public ColorDTO GetColorById(int id);
        string UpdateColor(ColorDTO color);
        string CreateColor(ColorDTO color);

    }
}
