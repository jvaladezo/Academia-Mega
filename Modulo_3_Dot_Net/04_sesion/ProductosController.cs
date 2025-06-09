using Microsoft.AspNetCore.Mvc;
using PrimeraApi2.Data;
//using Asp.Versioning;
using PrimeraApi2.Models;

namespace PrimeraApi2.Controllers
{
    [ApiController]
    /*[ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]//Api/
    */
    [Route("api/[controller]")] //Api/
    public class ProductosController : ControllerBase
    {
        /* public static readonly List<Producto> _datos = new()
         {
             new Producto { id = 1, Nombre = "iPhone 16", Precio = 20000.0m},
             new Producto { id = 2, Nombre = "Galaxy s25 Edge", Precio = 20000.0m}
         };*/

        private readonly ProductoService _service;

        public ProductosController(ProductoService service)
        {
            _service = service;
        }

        /*
            - CREATE -
        */
        [HttpPost] // POST /api/productos
        public async Task<IActionResult> Create(Producto nuevo)
        {
            var created = await _service.CreateAsync(nuevo);
            return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
        }

        /*
            - READ -
        */

        [HttpGet] // GET /api/productos
        public async Task<IActionResult> GetAll()
        {
            var lista = await _service.GetAllAsync();
            return Ok(lista);
        }

        [HttpGet("{id}")] //GET /api/productos/1
        public ActionResult<Producto> GetById(int id)
        {
            var producto = _service.GetByIdAsync(id);
            if (producto == null)
                return NotFound();
            return Ok(producto);
        }

        /*
            UPDATE
        */
        [HttpPut("{id}")] // PUT /api/productos/1
        public async Task<IActionResult> Update(int id, Producto actualizado)
        {
            var updated = await _service.UpdateAsync(id, actualizado);
            if (!updated)
                return NotFound();
            return NoContent();
        }

        /*
            - DELETE -
        */
        /*[HttpDelete("{id}")] //DELETE /api/products/1
        public IActionResult Delete(int id)
        {
            var product = _datos.FirstOrDefault(p => p.id == id);
            if (product == null)
                return NotFound();

            _datos.Remove(product);
            return Ok("El valor se ha eliminado correctamente");
        }*/
    }
}
