using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    public class TalleDTO
    {
        public TalleDTO()
        {

        }
        public TalleDTO(Talle talle)
        {
            IdTalle = talle.Id;
            TalleArticulo = talle.TalleArticulo;

            IdTipoTalle = talle.TipoTalle.Id;
            Descripcion = talle.TipoTalle.Descripcion;
        }

        public int IdTalle { get; set; }
        public string TalleArticulo { get; set; }

        public int IdTipoTalle { get; set; }
        public string Descripcion { get; set; }
        

        public Talle CastearATalle(TipoTalle tipoTalle)
        {
            Talle talle = new Talle();
            talle.Id = IdTalle;
            talle.TalleArticulo = TalleArticulo;
            talle.TipoTalle = tipoTalle;

            return talle;
        }
    }
}
