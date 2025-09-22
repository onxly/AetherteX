using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/reports")]
    public class ReportsController : ControllerBase
    {
        private readonly Database1Context db;

        public ReportsController(Database1Context context)
        {
            db = context;
        }

        public class RegisterReportResponse
        {
            public string Email { get; set; }
            public DateTime CreatedAt { get; set; }
        }

        // GET: AeatherAPI/reports/sales/{startDate}/{endDate}
        [HttpGet("sales/{startDate}/{endDate}")]
        public ActionResult<decimal> GetTotalSales(DateTime startDate, DateTime endDate) // Get total sales between two dates
        {
            if (startDate > endDate)
                return BadRequest("Start date must be earlier than end date");
            var totalSales = (from i in db.Invoices
                              where i.Date >= startDate && i.Date <= endDate
                              select i.Price).Sum();
            return Ok(totalSales);
        }

        // GET: AeatherAPI/reports/top-products/{n}
        [HttpGet("top-products/{n}")]
        public ActionResult<List<object>> GetTopNProducts(int n) // Get top N best-selling products
        {
            if (n <= 0)
                return BadRequest("N must be a positive integer");
            var topProducts = (from p in db.Purchases
                               group p by p.ProductId into g
                               orderby g.Count() descending
                               select new
                               {
                                   ProductId = g.Key,
                                   SalesCount = g.Count()
                               }).Take(n).ToList();
            return Ok(topProducts);
        }

        // GET: AeatherAPI/reports/inventory
        [HttpGet("inventory")]
        public ActionResult<List<object>> GetInventoryStatus() // Get current inventory status
        {
            var inventoryStatus = (from p in db.Products
                                   select new
                                   {
                                       p.ProductId,
                                       p.Title,
                                       p.Stock,
                                       p.IsActive
                                   }).ToList();
            return Ok(inventoryStatus);
        }

        // GET: AeatherAPI/reports/sold
        [HttpGet("sold")]
        public ActionResult<int> GetSoldProducts() // Get number of unique products sold
        {
            var soldProductsCount = (from p in db.Purchases
                                     select p.ProductId).Distinct().Count();
            return Ok(soldProductsCount);
        }

        // GET: AeatherAPI/reports/average-spending
        [HttpGet("average-spending")]
        public ActionResult<decimal> GetAverageSpending() // Get the average spending per user
        {
            var averageSpending = (from i in db.Invoices
                                   group i by i.ClientId into g
                                   select g.Average(x => x.Price)).Average();
            return Ok(averageSpending);
        }

        // GET: AeatherAPI/reports/registers/{startDate}/{endDate}
        [HttpGet("registers/{startDate}/{endDate}")]
        public ActionResult<int> GetNewRegistrations(DateTime startDate, DateTime endDate) // Get number of new client registrations between two dates
        {
            if (startDate > endDate)
                return BadRequest("Start date must be earlier than end date");
            var newRegistrations = (from c in db.Clients
                                    where c.CreatedAt >= startDate && c.CreatedAt <= endDate
                                    select c.ClientId).Count();
            return Ok(newRegistrations);
        }

        // GET: AeatherAPI/reports/registers
        [HttpGet("registers")]
        public ActionResult<List<RegisterReportResponse>> GetAllRegistrations() // Get all client registrations
        {
            var clients = (from u in db.Users
                         where u.Type == "client"
                         select u).ToList();

            var registrations = new List<RegisterReportResponse>();
            foreach (var user in clients)
            {
                var client = (from c in db.Clients
                              where c.ClientId == user.UserId
                              select c).FirstOrDefault();
                if (client != null)
                {
                    registrations.Add(new RegisterReportResponse
                    {
                        Email = user.Email,
                        CreatedAt = client.CreatedAt
                    });
                }
            }
            return Ok(registrations);
        }
    }
}
