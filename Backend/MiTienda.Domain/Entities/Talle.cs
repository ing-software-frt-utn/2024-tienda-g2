using MiTienda.Domain.Utilidades;

namespace MiTienda.Domain.Entities
{
    public class Talle : EntidadPersistible
    {
        public string TalleArticulo { get; set; }
        public TipoTalle TipoTalle { get; set; }
    }
}
