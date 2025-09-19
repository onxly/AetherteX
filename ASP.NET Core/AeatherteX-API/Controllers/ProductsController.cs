using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/products")]
    public class ProductsController : ControllerBase
    {
        private readonly Database1Context db = new Database1Context();

        public class AddProductRequest
        {
            public string Title { get; set; }
            public string Image { get; set; }
            public string Description { get; set; }
            public decimal Price { get; set; }
            public string Motherboard { get; set; }
            public string Case { get; set; }
            public string PowerSupply { get; set; }
            public int CpuId { get; set; }
            public int GpuId { get; set; }
            public int RamId { get; set; }
            public int StorageId { get; set; }
        }

        public class UpdateProductRequest
        {
            public string? Title { get; set; }
            public string? Image { get; set; }
            public string? Description { get; set; }
            public decimal? Price { get; set; }
            public string? Motherboard { get; set; }
            public string? Case { get; set; }
            public string? PowerSupply { get; set; }
            public int? CpuId { get; set; }
            public int? GpuId { get; set; }
            public int? RamId { get; set; }
            public int? StorageId { get; set; }
        }



        // GET: AeatherAPI/products
        [HttpGet]
        public ActionResult<List<Product>> GetAllProducts() // Get all products
        {
            var products = (from p in db.Products
                            select p).ToList();
            return StatusCode(0, products);
        }

        // GET: AeatherAPI/products/{id}
        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id) // Get a specific product by ID
        {
            var product = (from p in db.Products
                           where p.ProductId == id
                           select p).FirstOrDefault();
            if (product == null)
                return StatusCode(1, "Product not found");
            return StatusCode(0, product);
        }

        // POST: AeatherAPI/products
        [HttpPost]
        public ActionResult<int> AddProduct([FromBody] AddProductRequest request) // Add a new product
        {
            var existingProduct = (from p in db.Products
                                   where p.Title == request.Title
                                   select p).FirstOrDefault();

            if (existingProduct != null)
                return StatusCode(1, "Product with the same title already exists");

            var cpu = (from c in db.Cpus
                       where c.CpuId == request.CpuId
                       select c).FirstOrDefault();
            if (cpu == null)
                return StatusCode(1, "CPU not found");
            var gpu = (from g in db.Gpus
                       where g.GpuId == request.GpuId
                       select g).FirstOrDefault();
            if (gpu == null)
                return StatusCode(1, "GPU not found");
            var ram = (from r in db.Rams
                       where r.RamId == request.RamId
                       select r).FirstOrDefault();
            if (ram == null)
                return StatusCode(1, "RAM not found");
            var storage = (from s in db.Storages
                           where s.StorageId == request.StorageId
                           select s).FirstOrDefault();
            if (storage == null)
                return StatusCode(1, "Storage not found");

            

            var newProduct = new Product
            {
                Title = request.Title,
                Image = request.Image,
                Description = request.Description,
                Price = request.Price,
                Motherboard = request.Motherboard,
                Case = request.Case,
                PowerSupply = request.PowerSupply,
                CpuId = request.CpuId,
                GpuId = request.GpuId,
                RamId = request.RamId,
                StorageId = request.StorageId
            };
            db.Products.Add(newProduct);
            db.SaveChanges();
            return StatusCode(0, newProduct.ProductId);
        }

        // DELETE: AeatherAPI/products/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteProduct(int id) // Delete a product by ID
        {
            var product = (from p in db.Products
                           where p.ProductId == id
                           select p).FirstOrDefault();
            if (product == null)
                return StatusCode(1, "Product not found");
            db.Products.Remove(product);
            db.SaveChanges();
            return StatusCode(0, "Product deleted successfully");
        }

        // PUT: AeatherAPI/products/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateProduct(int id, [FromBody] UpdateProductRequest request) // Update a product by ID
        {
            var product = (from p in db.Products
                           where p.ProductId == id
                           select p).FirstOrDefault();
            if (product == null)
                return StatusCode(1, "Product not found");
            if (request.Title != null)
            {
                var existingProduct = (from p in db.Products
                                       where p.Title == request.Title && p.ProductId != id
                                       select p).FirstOrDefault();
                if (existingProduct != null)
                    return StatusCode(1, "Another product with the same title already exists");
                product.Title = request.Title;
            }
            if (request.Image != null)
                product.Image = request.Image;
            if (request.Description != null)
                product.Description = request.Description;
            if (request.Price.HasValue)
                product.Price = request.Price.Value;
            if (request.Motherboard != null)
                product.Motherboard = request.Motherboard;
            if (request.Case != null)
                product.Case = request.Case;
            if (request.PowerSupply != null)
                product.PowerSupply = request.PowerSupply;
            if (request.CpuId.HasValue)
            {
                var cpu = (from c in db.Cpus
                           where c.CpuId == request.CpuId.Value
                           select c).FirstOrDefault();
                if (cpu == null)
                    return StatusCode(1, "CPU not found");
                product.CpuId = request.CpuId.Value;
            }
            if (request.GpuId.HasValue)
            {
                var gpu = (from g in db.Gpus
                           where g.GpuId == request.GpuId.Value
                           select g).FirstOrDefault();
                if (gpu == null)
                    return StatusCode(1, "GPU not found");
                product.GpuId = request.GpuId.Value;
            }
            if (request.RamId.HasValue)
            {
                var ram = (from r in db.Rams
                           where r.RamId == request.RamId.Value
                           select r).FirstOrDefault();
                if (ram == null)
                    return StatusCode(1, "RAM not found");
                product.RamId = request.RamId.Value;
            }
            if (request.StorageId.HasValue)
            {
                var storage = (from s in db.Storages
                               where s.StorageId == request.StorageId.Value
                               select s).FirstOrDefault();
                if (storage == null)
                    return StatusCode(1, "Storage not found");
                product.StorageId = request.StorageId.Value;

            }
            db.SaveChanges();
            return StatusCode(0, "Product updated successfully");
        }

    }
}
