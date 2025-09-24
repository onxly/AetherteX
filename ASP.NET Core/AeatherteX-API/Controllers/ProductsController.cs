using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;
using static AeatherteX_API.Controllers.ProductsController;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/products")]
    public class ProductsController : ControllerBase
    {
        private readonly Database1Context db;

        public ProductsController(Database1Context context)
        {
            db = context;
        }

        public class AddProductRequest
        {
            public string Title { get; set; }
            public string Image1 { get; set; }
            public string? Image2 { get; set; }
            public string? Image3 { get; set; }
            public string? Image4 { get; set; }
            public string Description { get; set; }
            public decimal Price { get; set; }
            public string Motherboard { get; set; }
            public string Case { get; set; }
            public string PowerSupply { get; set; }
            public int CpuId { get; set; }
            public int GpuId { get; set; }
            public int RamId { get; set; }
            public int StorageId { get; set; }
            public int IsActive { get; set; }
            public int Stock { get; set; }
        }

        public class UpdateProductRequest
        {
            public string? Title { get; set; }
            public string? Image1 { get; set; }
            public string? Image2 { get; set; }
            public string? Image3 { get; set; }
            public string? Image4 { get; set; }
            public string? Description { get; set; }
            public decimal? Price { get; set; }
            public string? Motherboard { get; set; }
            public string? Case { get; set; }
            public string? PowerSupply { get; set; }
            public int? CpuId { get; set; }
            public int? GpuId { get; set; }
            public int? RamId { get; set; }
            public int? StorageId { get; set; }
            public int? IsActive { get; set; }
            public int? Stock { get; set; }
        }

        public class ProductResponse
        {
            public int ProductId { get; set; }
            public string Title { get; set; }
            public string Image1 { get; set; }
            public string Image2 { get; set; }
            public string Image3 { get; set; }
            public string Image4 { get; set; }
            public string Description { get; set; }
            public decimal Price { get; set; }
            public string Motherboard { get; set; }
            public string Case { get; set; }
            public string PowerSupply { get; set; }
            public int CpuId { get; set; }
            public int GpuId { get; set; }
            public int RamId { get; set; }
            public int StorageId { get; set; }
            public int IsActive { get; set; }
            public int Stock { get; set; }
            public double Rating { get; set; }
        }

        public class ProductsResponse
        {
            public int ProductId { get; set; }
            public string Title { get; set; }
            public string Image1 { get; set; }
            public decimal Price { get; set; }
            public int IsActive { get; set; }
            public int Stock { get; set; }
            public double Rating { get; set; }
        }

        // GET: AeatherAPI/products
        [HttpGet]
        public ActionResult<List<ProductsResponse>> GetAllProducts() // Get all products
        {
            var products = (from p in db.Products
                            select p).ToList();
            var productsResponse = products.Select(p => new ProductsResponse
            {
                ProductId = p.ProductId,
                Title = p.Title,
                Image1 = p.Image1,
                Price = p.Price,
                IsActive = p.IsActive,
                Stock = p.Stock,
                Rating = p.Ratings.Any() ? p.Ratings.Average(r => r.Stars) : 0.0
            }).ToList();
            return Ok(productsResponse);
        }

        // GET: AeatherAPI/products/{id}
        [HttpGet("{id}")]
        public ActionResult<ProductResponse> GetProduct(int id) // Get a specific product by ID
        {
            var product = (from p in db.Products
                           where p.ProductId == id
                           select p).FirstOrDefault();
            if (product == null)
                return NotFound("Product not found");
            var productResponse = new ProductResponse
                {
                ProductId= product.ProductId,
                Title = product.Title,
                Image1 = product.Image1,
                Image2 = product.Image2 ?? "",
                Image3 = product.Image3 ?? "",
                Image4 = product.Image4 ?? "",
                Description = product.Description,
                Price = product.Price,
                Motherboard = product.Motherboard,
                Case = product.Case,
                PowerSupply = product.PowerSupply,
                CpuId = product.CpuId,
                GpuId = product.GpuId,
                RamId = product.RamId,
                StorageId = product.StorageId,
                IsActive = product.IsActive,
                Stock = product.Stock,
                Rating = product.Ratings.Any() ? product.Ratings.Average(r => r.Stars) : 0.0
            };
            return Ok(productResponse);
        }

        // POST: AeatherAPI/products
        [HttpPost]
        public ActionResult<int> AddProduct([FromBody] AddProductRequest request) // Add a new product
        {
            var existingProduct = (from p in db.Products
                                   where p.Title == request.Title
                                   select p).FirstOrDefault();

            if (existingProduct != null)
                return Conflict("Product with the same title already exists");

            var cpu = (from c in db.Cpus
                       where c.CpuId == request.CpuId
                       select c).FirstOrDefault();
            if (cpu == null)
                return NotFound("CPU not found");
            var gpu = (from g in db.Gpus
                       where g.GpuId == request.GpuId
                       select g).FirstOrDefault();
            if (gpu == null)
                return NotFound("GPU not found");
            var ram = (from r in db.Rams
                       where r.RamId == request.RamId
                       select r).FirstOrDefault();
            if (ram == null)
                return NotFound("RAM not found");
            var storage = (from s in db.Storages
                           where s.StorageId == request.StorageId
                           select s).FirstOrDefault();
            if (storage == null)
                return NotFound("Storage not found");

            

            var newProduct = new Product
            {
                Title = request.Title,
                Image1 = request.Image1,
                Image2 = request.Image2 ?? null,
                Image3 = request.Image3 ?? null,
                Image4 = request.Image4 ?? null,
                Description = request.Description,
                Price = request.Price,
                Motherboard = request.Motherboard,
                Case = request.Case,
                PowerSupply = request.PowerSupply,
                CpuId = request.CpuId,
                GpuId = request.GpuId,
                RamId = request.RamId,
                StorageId = request.StorageId,
                IsActive = request.IsActive,
                Stock = request.Stock
            };
            db.Products.Add(newProduct);
            db.SaveChanges();
            return Ok(newProduct.ProductId);
        }

        // DELETE: AeatherAPI/products/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteProduct(int id) // Delete a product by ID
        {
            var product = (from p in db.Products
                           where p.ProductId == id
                           select p).FirstOrDefault();
            if (product == null)
                return NotFound("Product not found");
            db.Products.Remove(product);
            db.SaveChanges();

            return Ok();
        }

        // PUT: AeatherAPI/products/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateProduct(int id, [FromBody] UpdateProductRequest request) // Update a product by ID
        {
            var product = (from p in db.Products
                           where p.ProductId == id
                           select p).FirstOrDefault();
            if (product == null)
                return NotFound("Product not found");
            if (request.Title != null)
            {
                var existingProduct = (from p in db.Products
                                       where p.Title == request.Title && p.ProductId != id
                                       select p).FirstOrDefault();
                if (existingProduct != null)
                    return NotFound("Another product with the same title already exists");
                product.Title = request.Title;
            }
            if (request.Image1 != null)
                product.Image1 = request.Image1;
            if (request.Image2 != null)
                product.Image2 = request.Image2;
            if (request.Image3 != null)
                product.Image3 = request.Image3;
            if (request.Image4 != null)
                product.Image4 = request.Image4;
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
                    return NotFound("CPU not found");
                product.CpuId = request.CpuId.Value;
            }
            if (request.GpuId.HasValue)
            {
                var gpu = (from g in db.Gpus
                           where g.GpuId == request.GpuId.Value
                           select g).FirstOrDefault();
                if (gpu == null)
                    return NotFound("GPU not found");
                product.GpuId = request.GpuId.Value;
            }
            if (request.RamId.HasValue)
            {
                var ram = (from r in db.Rams
                           where r.RamId == request.RamId.Value
                           select r).FirstOrDefault();
                if (ram == null)
                    return NotFound("RAM not found");
                product.RamId = request.RamId.Value;
            }
            if (request.StorageId.HasValue)
            {
                var storage = (from s in db.Storages
                               where s.StorageId == request.StorageId.Value
                               select s).FirstOrDefault();
                if (storage == null)
                    return NotFound("Storage not found");
                product.StorageId = request.StorageId.Value;

            }
            if (request.IsActive.HasValue)
                product.IsActive = request.IsActive.Value;
            if (request.Stock.HasValue)
                product.Stock = request.Stock.Value;
            db.SaveChanges();
            return Ok();
        }

        // GET: AeatherAPI/products/summary/{id}
        [HttpGet("summary/{id}")]
        public IActionResult GenerateSystemOverview(int id) // Generate a summary of the product's components
        {
            var product = (from p in db.Products
                            where p.ProductId == id
                           select p).FirstOrDefault();

            if (product == null)
                return NotFound("Product not found");

            var cpu = (from c in db.Cpus
                       where c.CpuId == product.CpuId
                       select c).FirstOrDefault();
            var gpu = (from g in db.Gpus
                       where g.GpuId == product.GpuId
                       select g).FirstOrDefault();
            var ram = (from r in db.Rams
                       where r.RamId == product.RamId
                          select r).FirstOrDefault();
            var storage = (from s in db.Storages
                           where s.StorageId == product.StorageId
                            select s).FirstOrDefault();

            if (cpu == null || gpu == null || ram == null || storage == null)
            {
                return NotFound("One or more components not found");
            }

            string summary = "";

            if (cpu.BenchmarkScore > 100)
                summary += "CPU: Extremely fast — easily handles demanding tasks and multitasking.\n";
            else if (cpu.BenchmarkScore > 80)
                summary += "CPU: Solid performance — reliable for most workloads.\n";
            else
                summary += "CPU: Modest — may struggle under heavy usage.\n";

            if (gpu.BenchmarkScore > 100)
                summary += "GPU: High-end graphics performance — perfect for gaming, 3D rendering, and video editing.\n";
            else if (gpu.BenchmarkScore > 80)
                summary += "GPU: Adequate — handles casual gaming and creative tasks well.\n";
            else
                summary += "GPU: Low-end — not ideal for modern gaming or graphics-heavy work.\n";

            if (ram.BenchmarkScore > 100)
                summary += "RAM: Excellent multitasking capacity — smooth performance with multiple applications.\n";
            else if (ram.BenchmarkScore > 80)
                summary += "RAM: Sufficient for most daily tasks and multitasking.\n";
            else
                summary += "RAM: Limited — performance drops when running many applications simultaneously.\n";

            if (storage.BenchmarkScore > 100)
                summary += "Storage: Ultra-fast — quick boot times and file access.\n";
            else if (storage.BenchmarkScore > 80)
                summary += "Storage: Responsive — performs well for standard use.\n";
            else
                summary += "Storage: Slow — file operations can be noticeably delayed.\n";

            return Ok(summary.Trim());
        }

    }




}
