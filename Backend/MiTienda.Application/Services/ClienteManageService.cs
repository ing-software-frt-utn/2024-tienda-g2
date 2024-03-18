using Microsoft.EntityFrameworkCore;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.DataAccess.Repositories;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;

namespace MiTienda.Application.Services
{
    public class ClienteManageService : IManageClienteService
    {
        private IRepository<Cliente> _clienteRepo;
        private IRepository<CondicionTributaria> _condicionTributariaRepo;
        public ClienteManageService(IRepository<Cliente> clienteRepo, IRepository<CondicionTributaria> CondicionTributariaRepo)
        {
            _clienteRepo = clienteRepo;
            _condicionTributariaRepo = CondicionTributariaRepo;

        }
        public List<ClienteDTO> GetClientes()
        {
            List<ClienteDTO> clientes = new List<ClienteDTO>();

            foreach (Cliente cliente in _clienteRepo.GetAll().AsQueryable().Include(x => x.CondicionTributaria))
            {
                ClienteDTO ClienteDTO = new ClienteDTO(cliente);
                clientes.Add(ClienteDTO);
            }
            return clientes;
        }

        public ClienteDTO GetClienteByIdOrDni(int idordni)
        {
            ClienteDTO cliente = new ClienteDTO(_clienteRepo.GetBy(c => c.Id == idordni || c.Dni == idordni).AsQueryable().Include(x => x.CondicionTributaria).SingleOrDefault());
            return (cliente == null) ? null : cliente;

        }

        public Cliente GetClientByIdOrDni(int idordni)
        {
            Cliente cliente = _clienteRepo.GetBy(c => c.Id == idordni || c.Dni == idordni).AsQueryable().Include(x => x.CondicionTributaria).SingleOrDefault();
            return (cliente == null) ? null : cliente;

        }

        public List<ClienteDTO> GetClientesByNombreOrCuil(string NombreorCuil)
        {
            List<ClienteDTO> clientes = new List<ClienteDTO>();

            foreach (Cliente cliente in _clienteRepo.GetBy(c => c.Nombre.Contains(NombreorCuil) || c.Apellido.Contains(NombreorCuil) || c.Cuil.Contains(NombreorCuil)).AsQueryable().Include(x => x.CondicionTributaria).ToList())
            {
                ClienteDTO ClienteDTO = new ClienteDTO(cliente);
                clientes.Add(ClienteDTO);
            }
            return clientes.Count > 0 ? clientes : null;
        }


        public string CreateCliente(ClientePostDTO cliente)
        {
            try
            {
                if (cliente == null)
                    throw new Exception("No se puede agregar un cliente vacio");

                bool validarExistencia = _clienteRepo.GetAll().Any(c => c.Dni == cliente.Dni);

                if (validarExistencia)
                {
                    throw new Exception("El cliente que desea dar de alta ya existe");
                }
                else
                {
                    Cliente clienteNuevo = new Cliente();
                    clienteNuevo.Dni = cliente.Dni;
                    clienteNuevo.Cuil = cliente.Cuil;
                    clienteNuevo.Apellido = cliente.Apellido;
                    clienteNuevo.Nombre = cliente.Nombre;
                    clienteNuevo.CondicionTributaria = _condicionTributariaRepo.GetBy(x => x.Descripcion == cliente.DescripcionCondTribu).SingleOrDefault();
                    _clienteRepo.AddObject(clienteNuevo);
                    return $"Cliente creado correctamente ID: {clienteNuevo.Id} , NOMBRE COMPLETO: {clienteNuevo.Apellido}, {clienteNuevo.Nombre} con condicion: {clienteNuevo.CondicionTributaria.Descripcion}";
                }
            }
            catch (Exception ex)
            {
                throw;
            }

        }
        public List<CondicionTributaria> GetCondicionesTributarias()
        {
            return _condicionTributariaRepo.GetAll().ToList();
        }

        public string UpdateCliente(ClienteDTO ClienteDTO)
        {
            try
            {
                Cliente existingCliente = _clienteRepo.GetByID(ClienteDTO.IdCliente).SingleOrDefault();

                if (existingCliente == null)
                {
                    throw new Exception($"No se encontró ningún cliente con ID: {ClienteDTO.IdCliente}");
                }
                existingCliente.Dni = ClienteDTO.Dni;
                existingCliente.Cuil = ClienteDTO.Cuil;
                existingCliente.Apellido = ClienteDTO.Apellido;
                existingCliente.Nombre = ClienteDTO.Nombre;
                existingCliente.CondicionTributaria = _condicionTributariaRepo.GetByID(ClienteDTO.IdCondicionTrib).SingleOrDefault();
                _clienteRepo.Update(existingCliente);

                return $"Cliente ID: {existingCliente.Id} actualizado correctamente";
            }
            catch (Exception ex)
            {
                throw new Exception($"Error al actualizar el cliente: {ex.Message}");
            }
        }


        public string DeleteCliente(int idCliente)
        {
            try
            {
                if (_clienteRepo.GetByID(idCliente).Any())
                {
                    _clienteRepo.DeleteByID(idCliente);
                    return $"Cliente id: {idCliente} eliminado";
                }
                else
                {
                    throw new Exception($"No se encontró ningún cliente con ID: {idCliente}");
                }
            }
            catch (Exception ex)
            {
                throw new Exception($"Error al actualizar el cliente: {ex.Message}");
            }

        }


    }
}
