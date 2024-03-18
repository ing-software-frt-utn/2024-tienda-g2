using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    public class LineaVentaDTO
    {

 
        public int Cantidad { get; set; }
        public int StockID { get; set; }
        public int VentaID { get; set; }

        public LineaVentaDTO(int cantidad, int StockID, int VentaID )
        {
            this.Cantidad = cantidad;
            this.StockID = StockID;
            this.VentaID = VentaID;
        }
    }
}
