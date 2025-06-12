using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TiendaMVC.Models;
using TiendaMVC.Services;

namespace TiendaMVC.Controllers
{
    public class ProductosController : Controller
    {
        private readonly IProductoApiService _api;
        public ProductosController(IProductoApiService api) => _api = api;

        public async Task<IActionResult> Index()
        {
            var products = await _api.GetAllAsync();
            return View(products);        
        }
        
        public IActionResult Create() -> View();
         
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Producto producto)
        {

        }

        public IActionResult Details(int id)
        {
            return View(new Producto());
        }
    }
}
