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

namespace Tests_MiTienda.Application
{
    public class ColorServiceTest
    {
        List<Color> bgColors = new List<Color>
        {
            new Color { Id = 1, Nombre = "Red" },
            new Color { Id = 2, Nombre = "Green" },
            new Color { Id = 3, Nombre = "Blue" }
        };
        Mock<IRepository<Color>> colorRepo = new Mock<IRepository<Color>>();
        ColorManageService colorService;
        [SetUp]
        public void Setup()
        {
            colorRepo.Setup(repo => repo.GetAll()).Returns(bgColors);
            colorService = new ColorManageService(colorRepo.Object);

        }

        [Test]
        public void TestColorGetColors()
        {
            var colors = colorService.GetColors();
            Console.WriteLine(colors.ToString());
            Assert.IsTrue(colors.ToList().Count > 0);
        }
    }
}