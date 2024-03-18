using API_MiTienda.Controllers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.DataAccess.Contexts;
using MiTienda.DataAccess.Contracts;
using MiTienda.DataAccess.Repositories;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;
using Moq;

namespace Tests_MiTienda.Application
{
    public class CategoriaServiceTest
    {
        List<Categoria> bgCategorias = new List<Categoria>
        {
            new Categoria { Id = 1, Descripcion = "Zapatillas" },
            new Categoria { Id = 2, Descripcion = "Abrigo" },
            new Categoria { Id = 3, Descripcion = "Remeras" }
        };
        Mock<IRepository<Categoria>> categoriaRepo = new Mock<IRepository<Categoria>>();
        CategoriaManageService categoriaService;
        [SetUp]
        public void Setup()
        {
            categoriaRepo.Setup(repo => repo.GetAll()).Returns(bgCategorias);
            categoriaRepo.Setup(repo => repo.GetByID(1)).Returns(bgCategorias);
            categoriaService = new CategoriaManageService(categoriaRepo.Object);

        }

        [Test]
        public void TestCategoriaGetCategorias()
        {
            var categorias = categoriaService.GetCategorias();
            Assert.IsTrue(categorias.ToList().Count > 0);
        }

        [Test]
        public void TestCategoriaGetCategoriaById()
        {
            var categorias = categoriaService.GetCategoriaById(1);
            Assert.AreEqual(bgCategorias[0].Descripcion , categorias.Descripcion);
        }
    }
}