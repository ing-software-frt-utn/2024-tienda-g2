using MiTienda.Domain.Utilidades;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Domain.Entities
{
    public class TipoPago : EntidadPersistible
    {
        public string Descripcion { get; set; }

        public TipoPago() { }
    }
}

