using MiTienda.Domain.Utilidades;

namespace MiTienda.Domain.Entities
{
    public class CondicionTributaria : EntidadPersistible
    {
        public string Abreviatura { get; set; }
        public string Descripcion { get; set; }

    }
}
