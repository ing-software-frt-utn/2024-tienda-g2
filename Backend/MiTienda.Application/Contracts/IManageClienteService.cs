
using MiTienda.Application.DTOs;
using MiTienda.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiTienda.Application.Contracts
{
    public interface IManageClienteService
    {
        List<ClienteDTO> GetClientes();
        ClienteDTO GetClienteByIdOrDni(int IdOrDni);
        Cliente GetClientByIdOrDni(int IdOrDni);
        List<ClienteDTO> GetClientesByNombreOrCuil(string NombreoCuil);
        string UpdateCliente(ClienteDTO cliente);
        string CreateCliente(ClientePostDTO cliente);
        string DeleteCliente(int Id);
        List<CondicionTributaria> GetCondicionesTributarias();
    }
}
