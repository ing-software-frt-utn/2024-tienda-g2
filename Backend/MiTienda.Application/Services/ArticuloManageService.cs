using Microsoft.EntityFrameworkCore;
using MiTienda.Application.Contracts;
using MiTienda.Application.DTOs;
using MiTienda.DataAccess.Repositories;
using MiTienda.Domain.Contracts;
using MiTienda.Domain.Entities;

namespace MiTienda.Application.Services
{
    public class ArticuloManageService : IManageArticuloService
    {
        private  IRepository<Articulo> _articuloRepo;
        private IRepository<Marca> _marcaRepo;
        private IRepository<Categoria> _categoriaRepo;

        public ArticuloManageService(IRepository<Articulo> articuloRepo, IRepository<Marca> marcaRepo, IRepository<Categoria> categoriaRepo)
        {
            _articuloRepo = articuloRepo;
            _marcaRepo = marcaRepo;
            _categoriaRepo = categoriaRepo;
        }

        public string CreateArticulo(ArticuloDTO articuloDTO)
        {
            try
            {
                if (articuloDTO == null)
                    throw new Exception("Articulo nulo.");

                if (_articuloRepo.GetBy(x => x.CodigoBarras == articuloDTO.CodigoBarras) == null)
                    throw new Exception("Ya existe el articulo con ese codigo");

                Articulo articulo = articuloDTO.CastearAArticulo(
                    _marcaRepo.GetByID(articuloDTO.MarcaId).SingleOrDefault(),
                    _categoriaRepo.GetByID(articuloDTO.CategoriaId).SingleOrDefault()
                    );

                _articuloRepo.AddObject(articulo);
               
                return $"Articulo creado correctamente ID: {articulo.Id} , CODIGO: {articulo.CodigoBarras}, DESCRIPCION: {articulo.Descripcion}";
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                return null;
            }
        }
        public string UpdateArticulo(ArticuloDTO articuloDTO)
        {
            try
            {
                Articulo articulo = articuloDTO.CastearAArticulo(
                    _marcaRepo.GetByID(articuloDTO.MarcaId).SingleOrDefault(),
                    _categoriaRepo.GetByID(articuloDTO.CategoriaId).SingleOrDefault()
                    );
                _articuloRepo.Update(articulo);
                return $"Articulo id: {articuloDTO.Id} actualizado";
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                return $"Error al actualizar articulo id: {articuloDTO.Id}";
            }
        }
        public string DeleteArticulo(int idArticulo)
        {
            try
            {
                _articuloRepo.DeleteByID(idArticulo);
                return $"Articulo id: {idArticulo} eliminado";
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                return $"Error al eliminar articulo id: {idArticulo}";
            }

        }

        public void SaveArticulo()
        {
            _articuloRepo.SaveChanges();
        }

        public List<ArticuloDTO> GetArticulos()
        {
            List<ArticuloDTO> articulos = new List<ArticuloDTO>();
            foreach (var item in _articuloRepo.GetAll().AsQueryable().Include(x => x.Marca).Include(x => x.Categoria))
            {
                articulos.Add(new ArticuloDTO(item));
            }
            return articulos;
        }
        public ArticuloDTO GetArticuloById(int id)
        {
            var a = _articuloRepo.GetByID(id).AsQueryable().Include(x => x.Marca).Include(x => x.Categoria).SingleOrDefault();//.thenInclude() si tuviese una subclase

            if (a == null)
                return null;

            ArticuloDTO articulo = new ArticuloDTO(a);
            return articulo;
        }
        public ArticuloDTO GetArticuloByCodigoBarras(string codigo)
        {
                ArticuloDTO articulo = new ArticuloDTO(_articuloRepo.GetBy(x => x.CodigoBarras == codigo).AsQueryable().Include(x => x.Marca).Include(x => x.Categoria).SingleOrDefault());
            return articulo;
        }

        
    }
}
