using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    public class TipoTalleDTO
    {
        public TipoTalleDTO()
        {

        }
        public TipoTalleDTO(TipoTalle TipoTalle)
        {
            IdTipoTalle = TipoTalle.Id;
            Descripcion = TipoTalle.Descripcion;
        }

        public int IdTipoTalle { get; set; }
        public string Descripcion { get; set; }

        public TipoTalle CastearATipoTalle()
        {
            TipoTalle TipoTalle = new TipoTalle();
            TipoTalle.Descripcion = Descripcion;
            return TipoTalle;
        }
    }
}
