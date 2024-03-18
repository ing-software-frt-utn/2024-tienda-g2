using MiTienda.Domain.Utilidades;
using System.ComponentModel.DataAnnotations.Schema;

namespace MiTienda.Domain.Entities
{
    public class Cliente: EntidadPersistible
    {
        public int Dni { get; set; }
        public string Cuil { get; set; }
        public string Apellido { get; set; }
        public string Nombre { get; set; }
     
        public CondicionTributaria CondicionTributaria { get; set; }



        private void AsociarCliente()
        {
            throw new NotImplementedException();
        }
    }
}
