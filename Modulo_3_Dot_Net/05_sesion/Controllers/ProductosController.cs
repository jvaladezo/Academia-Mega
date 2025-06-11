using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TiendaMVC.Models;

namespace TiendaMVC.Controllers
{
    public class ProductosController : Controller
    {
        private static readonly List<Producto> _producto = new()
        {
            new Producto
            {
                Id = 1,
                Nombre = "Xiaomi 15 Ultra",
                Precio = 33000.00m,
            },
            new Producto
            {
                Id = 1,
                Nombre = "Honor Magic 7 Pro",
                Precio = 29000.00m,
            },
        };

        public IActionResult Index()
        {
            return View(_producto);
        }

        public IActionResult Details(int id)
        {
            var product = _producto.FirstOrDefault(p => p.Id == id);
            if (product == null)
                return NotFound();
            return View(product);
        }
    }
}
