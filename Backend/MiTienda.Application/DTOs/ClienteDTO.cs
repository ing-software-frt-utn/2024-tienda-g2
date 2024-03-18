using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.DTOs
{
    public class ClienteDTO
    {
        public ClienteDTO()
        {

        }
        public ClienteDTO(Cliente cliente)
        {
            IdCliente = cliente.Id;
            Dni = cliente.Dni;
            Cuil = cliente.Cuil;
            Apellido = cliente.Apellido;
            Nombre = cliente.Nombre;

            IdCondicionTrib = cliente.CondicionTributaria.Id;
            CondicionTrib = cliente.CondicionTributaria.Descripcion;
            AbreviaturaCondicionTrib = cliente.CondicionTributaria.Abreviatura;
        }

        public int IdCliente { get; set; }
        public int Dni { get; set; }
        public string Cuil { get; set; }
        public string Apellido { get; set; }
        public string Nombre { get; set; }

        public int IdCondicionTrib { get; set; }
        public string CondicionTrib { get; set; }
        public string AbreviaturaCondicionTrib { get; set; }

        public Cliente CastearACliente(CondicionTributaria ct)
        {
            Cliente cliente = new Cliente();
            cliente.Id = IdCliente;
            cliente.Dni = Dni;
            cliente.Apellido = Apellido;
            cliente.Nombre = Nombre;
            cliente.Cuil = Cuil;
            cliente.CondicionTributaria = ct;

            return cliente;
        }
    }
}
