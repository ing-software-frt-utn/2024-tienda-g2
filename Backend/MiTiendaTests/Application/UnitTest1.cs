using API_MiTienda.Controllers;
using MiTienda.Application.Contracts;
using MiTienda.Domain.Contracts;

namespace MiTiendaTests.Application
{
    [TestClass]
    public class UnitTest1
    {
        IManageColorService manageColorService;
        ColorController colorController;

        public UnitTest1()
        {
            this.manageColorService = new manageColorService();
            this.colorController = new ColorController(manageColorService);
        }

        [TestMethod]
        public void TestMethod1()
        {

            var colors = colorController.GetAllColors();
            Assert.IsTrue(colors.Value.ToList().Count > 0);
        }
    }
}