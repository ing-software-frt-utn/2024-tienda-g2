using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using MiTienda.Application.Contracts;
using MiTienda.Application.Services;
using MiTienda.DataAccess.Contexts;
using MiTienda.DataAccess.Contracts;
using MiTienda.DataAccess.Repositories;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;
using System.Text;

namespace API_MiTienda.InitialSetup
{
    public static class InitialDependecyInjection
    {
        public static IServiceCollection InitialCharges(this IServiceCollection servicios, string conectionString)
        {
            servicios.AddControllers();

            servicios.AddEndpointsApiExplorer();
            servicios.AddSwaggerGen();

            servicios.AddDbContext<ITiendaEF, MiTiendaContexto>(
                options => options.UseSqlServer(conectionString),
                ServiceLifetime.Singleton
                );

            servicios.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            //Generic queries
            servicios.AddScoped(typeof(IQueryService<>), typeof(QueryService<>));

            //Managers
            servicios.AddScoped<IManageArticuloService, ArticuloManageService>();
            servicios.AddScoped<IManageStockService, StockManageService>();
            servicios.AddScoped<IManageColorService, ColorManageService>();
            servicios.AddScoped<IManageMarcaService, MarcaManageService>();
            servicios.AddScoped<IManageCategoriaService, CategoriaManageService>();
            servicios.AddScoped<IManageTipoTalleService, TipoTalleManageService>();
            servicios.AddScoped<IManageClienteService, ClienteManageService>();
            servicios.AddScoped<IManageTalleService, TalleManageService>();
            servicios.AddScoped<IManageInventarioService, InventarioManageService>();
            servicios.AddScoped<IManageVentaService, VentaManageService>();
            servicios.AddScoped<IManageLineasVentaService, LineaVentaManageService>();
            servicios.AddScoped <IManagePagoService,PagoManageService>();
            servicios.AddSingleton <IVenta,Venta>();




            return servicios;
        }

    }
}
