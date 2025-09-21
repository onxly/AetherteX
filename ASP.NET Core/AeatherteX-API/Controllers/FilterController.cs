using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/filter")]
    public class FilterController : ControllerBase
    {
        private readonly Database1Context db;

        public FilterController(Database1Context context)
        {
            db = context;
        }

        public class FilterRequest
        {
            public string? CpuBrand { get; set; }
            public int? RamCapacity { get; set; }
            public string? RamType { get; set; }
            public int? StorageCapacity { get; set; }
            public double? startPrice { get; set; }
            public double? endPrice { get; set; }
            public double? minRating { get; set; }
        }

        public class FilterResponse
        {
            public int ProductId { get; set; }
            public string Title { get; set; }
            public string Image1 { get; set; }
            public decimal Price { get; set; }
            public int IsActive { get; set; }
            public int Stock { get; set; }
            public double Rating { get; set; }
        }

        public class SearchRequest
        {
            public string Query { get; set; }
            public FilterRequest Filter { get; set; }
        }

        // POST: AeatherAPI/filter
        [HttpPost]
        public ActionResult<FilterResponse> FilterProducts([FromBody] FilterRequest request)
        {
            var products = db.Products.AsQueryable();
            if (!string.IsNullOrEmpty(request.CpuBrand))
            {
                products = products.Where(p => p.Cpu.Brand == request.CpuBrand);
            }
            if (request.RamCapacity > 0)
            {
                products = products.Where(p => p.Ram.Capacity >= request.RamCapacity);
            }
            if (!string.IsNullOrEmpty(request.RamType))
            {
                products = products.Where(p => p.Ram.Type == request.RamType);
            }
            if (request.StorageCapacity > 0)
            {
                products = products.Where(p => p.Storage.Capacity >= request.StorageCapacity);
            }
            if (request.startPrice >= 0 && request.endPrice > 0 && request.endPrice >= request.startPrice)
            {
                products = products.Where(p => p.Price >= (decimal)request.startPrice && p.Price <= (decimal)request.endPrice);
            }
            if (request.minRating > 0)
            {
                products = products.Where(p => p.Ratings.Average(r => r.Stars) >= request.minRating);
            }
            var result = products.Select(p => new FilterResponse
            {
                ProductId = p.ProductId,
                Title = p.Title,
                Image1 = p.Image1,
                Price = p.Price,
                IsActive = p.IsActive,
                Stock = p.Stock,
                Rating = p.Ratings.Any() ? p.Ratings.Average(r => r.Stars) : 0
            }).ToList();
            return Ok(result);
        }

        // POST: AeatherAPI/filter/search
        [HttpPost("search")]
        public ActionResult<FilterResponse> SearchAndFilterProducts([FromBody] SearchRequest request)
        {
            var products = db.Products.AsQueryable();
            if (!string.IsNullOrEmpty(request.Query))
            {
                products = products.Where(p => p.Title.Contains(request.Query) || p.Description.Contains(request.Query));
            }
            var filterRequest = request.Filter;
            if (filterRequest != null)
            {
                if (!string.IsNullOrEmpty(filterRequest.CpuBrand))
                {
                    products = products.Where(p => p.Cpu.Brand == filterRequest.CpuBrand);
                }
                if (filterRequest.RamCapacity > 0)
                {
                    products = products.Where(p => p.Ram.Capacity >= filterRequest.RamCapacity);
                }
                if (!string.IsNullOrEmpty(filterRequest.RamType))
                {
                    products = products.Where(p => p.Ram.Type == filterRequest.RamType);
                }
                if (filterRequest.StorageCapacity > 0)
                {
                    products = products.Where(p => p.Storage.Capacity >= filterRequest.StorageCapacity);
                }
                if (filterRequest.startPrice >= 0 && filterRequest.endPrice > 0 && filterRequest.endPrice >= filterRequest.startPrice)
                {
                    products = products.Where(p => p.Price >= (decimal)filterRequest.startPrice && p.Price <= (decimal)filterRequest.endPrice);
                }
                if (filterRequest.minRating > 0)
                {
                    products = products.Where(p => p.Ratings.Average(r => r.Stars) >= filterRequest.minRating);
                }
            }
            var result = products.Select(p => new FilterResponse
            {
                ProductId = p.ProductId,
                Title = p.Title,
                Image1 = p.Image1,
                Price = p.Price,
                IsActive = p.IsActive,
                Stock = p.Stock,
                Rating = p.Ratings.Any() ? p.Ratings.Average(r => r.Stars) : 0
            }).ToList();
            return Ok(result);
        }
    }
}
