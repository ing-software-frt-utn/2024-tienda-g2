using API_MiTienda.Controllers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MiTienda.Application.Contracts;
using MiTienda.DataAccess.Contexts;
using MiTienda.DataAccess.Contracts;
using MiTienda.DataAccess.Repositories;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;
using Moq;
using System;
using System.Linq.Expressions;

namespace Tests_MiTienda.Application
{
    public class ClienteServiceTest
    {
        //Arrange
        Mock<IRepository<Cliente>> mockClienteRepo = new Mock<IRepository<Cliente>>();
        Mock<IRepository<CondicionTributaria>> mockCondicionTributariaRepo = new Mock<IRepository<CondicionTributaria>>();
        ClienteManageService clienteService;
        List<Cliente> bgClients = new List<Cliente>
        {
            new Cliente { Id = 1, Apellido = "Rodriguez",Nombre = "Nicolas",Cuil = "20405556669",Dni = 40555666,CondicionTributaria = new CondicionTributaria() { Id = 1, Abreviatura = "CF", Descripcion = "Consumidor Final" } },
            new Cliente { Id = 1, Apellido = "Vigiani",Nombre = "Nicolas",Cuil = "20405556669",Dni = 40555888,CondicionTributaria = new CondicionTributaria() { Id = 1, Abreviatura = "CF", Descripcion = "Consumidor Final" } },
            new Cliente { Id = 1, Apellido = "Sichi",Nombre = "Nicolas",Cuil = "20405556669",Dni = 40555999,CondicionTributaria = new CondicionTributaria() { Id = 1, Abreviatura = "CF", Descripcion = "Consumidor Final" } },
        };

        //Setup
        [SetUp]
        public void Setup()
        { 
            mockClienteRepo.Setup(repo => repo.GetAll()).Returns(bgClients.AsQueryable());
            mockClienteRepo.Setup(repo => repo.GetBy(It.IsAny < Expression <Func<Cliente, bool>>>())).Returns(bgClients.AsQueryable());
            clienteService = new ClienteManageService(mockClienteRepo.Object, mockCondicionTributariaRepo.Object);

        }

        //Tests
        [Test]
        public void TestClientesGetClientes()
        {
            var clientes = clienteService.GetClientes();
            Assert.IsTrue(clientes.ToList().Count == 3);
        }

        [Test]
        public void TestClientesGetClientesByNombreOrCuil()
        {
            var clientes = clienteService.GetClientesByNombreOrCuil("Vigiani");
            Assert.IsNotNull(clientes);
        }

        [Test]
        public void TestClientesGetClientByIdOrDni()
        {
            var clientes = clienteService.GetClientByIdOrDni(40555666);
            Assert.IsNotNull(clientes);
        }
    }
}
