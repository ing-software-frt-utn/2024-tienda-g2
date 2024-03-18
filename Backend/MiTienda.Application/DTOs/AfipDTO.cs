using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    public class AfipDTO
    {
        public double ImporteTotal { get; set; }
        public long numeroDocumento { get; set; }
        public string CondicionTributaria { get; set; }
        public int idVenta { get; set; }
    }



}
