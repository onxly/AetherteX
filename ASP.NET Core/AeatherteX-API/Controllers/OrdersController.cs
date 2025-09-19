using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/orders")]
    public class OrdersController : ControllerBase
    {
        private readonly Database1Context db = new Database1Context();

        public class GetOrdersRequest
        {
            public int ClientId { get; set; }
        }

        public class CreateOrderRequest
        {
            public List<Purchase> Purchases { get; set; }
            public int ClientId { get; set; }
            public int AddressId { get; set; }
            public string? Instructions { get; set; }
        }

        public class OrderDetailsResponse
        {
            public Invoice Invoice { get; set; }
            public Shipping Shipping { get; set; }
            public List<Purchase> Purchases { get; set; }
        }

        public class GetByDateRequest
        {
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
        }


        // GET: AeatherAPI/orders/{id}
        [HttpGet("{id}")]
        public ActionResult<OrderDetailsResponse> GetOrder(int id) // Get a specific order by invoice ID
        {
            var invoice = (from i in db.Invoices
                           where i.InvoiceId == id
                           select i).FirstOrDefault();
            if (invoice == null)
                return StatusCode(1, "Invoice not found");
            var shipping = (from s in db.Shippings
                            where s.InvoiceId == id
                            select s).FirstOrDefault();
            var purchases = (from p in db.Purchases
                             where p.InvoiceId == id
                             select p).ToList();
            var order = new OrderDetailsResponse
            {
                Invoice = invoice,
                Shipping = shipping,
                Purchases = purchases
            };
            return StatusCode(0, order);
        }

        // POST: AeatherAPI/orders
        [HttpPost]
        public ActionResult<List<OrderDetailsResponse>> GetOrders([FromBody] GetOrdersRequest request) // Get all orders for a specific client
        {
            var client = (from c in db.Clients
                          where c.ClientId == request.ClientId
                          select c).FirstOrDefault();
            if (client == null)
                return StatusCode(1, "Client not found");
            var invoices = (from i in db.Invoices
                            where i.ClientId == request.ClientId
                            select i).ToList();
            var orders = new List<OrderDetailsResponse>();
            foreach (var invoice in invoices)
            {
                var shipping = (from s in db.Shippings
                                where s.InvoiceId == invoice.InvoiceId
                                select s).FirstOrDefault();
                var purchases = (from p in db.Purchases
                                 where p.InvoiceId == invoice.InvoiceId
                                 select p).ToList();
                var order = new OrderDetailsResponse
                {
                    Invoice = invoice,
                    Shipping = shipping,
                    Purchases = purchases
                };
                orders.Add(order);
            }
            return StatusCode(0, orders);
        }

        // PUT: AeatherAPI/orders
        [HttpPut]
        public ActionResult<int> CreateOrder([FromBody] CreateOrderRequest request) // Create a new order
        {
            var client = (from c in db.Clients
                          where c.ClientId == request.ClientId
                          select c).FirstOrDefault();
            if (client == null)
                return StatusCode(1, "Client not found");
            var address = (from a in db.Addresses
                           where a.AddressId == request.AddressId
                           select a).FirstOrDefault();
            if (address == null)
                return StatusCode(1, "Address not found");
            decimal totalPrice = 0;
            int totalQuantity = 0;
            foreach (var purchase in request.Purchases)
            {
                var product = (from p in db.Products
                               where p.ProductId == purchase.ProductId && p.IsActive == 1 && p.Stock >= purchase.Quantity
                               select p).FirstOrDefault();
                if (product != null)
                {
                    totalPrice += product.Price * purchase.Quantity;
                    totalQuantity += purchase.Quantity;
                }
                          
            }
            if (totalQuantity <= 0 || totalPrice <= 0)
                return StatusCode(1, "No valid products in the order");

            var invoice = new Invoice
            {
                ClientId = request.ClientId,
                AddressId = request.AddressId,
                Date = DateTime.Now,
                Price = totalPrice,
                Quantity = totalQuantity
            };
            db.Invoices.Add(invoice);
            db.SaveChanges();
            foreach (var purchase in request.Purchases)
            {
                var product = (from p in db.Products
                               where p.ProductId == purchase.ProductId && p.IsActive == 1 && p.Stock >= purchase.Quantity
                               select p).FirstOrDefault();
                if(product != null)
                {
                    var newPurchase = new Purchase
                    {
                        InvoiceId = invoice.InvoiceId,
                        ProductId = product.ProductId,
                        Quantity = purchase.Quantity,
                        Price = product.Price * purchase.Quantity
                    };
                    db.Purchases.Add(newPurchase);
                    product.Stock -= purchase.Quantity;
                }
            }
            db.SaveChanges();

            
            var shipping = new Shipping
            {
                InvoiceId = invoice.InvoiceId,
                Instructions = request.Instructions,
                Status = "Pending"
            };

            db.Shippings.Add(shipping);
            db.SaveChanges();
           
            return StatusCode(0, invoice.InvoiceId);
        }

        // POST: AeatherAPI/orders/bydate
        [HttpPost("bydate")]
        public ActionResult<List<OrderDetailsResponse>> GetOrdersByDate([FromBody] GetByDateRequest request) // Get all orders within a specific date range
        {
            var invoices = (from i in db.Invoices
                            where i.Date >= request.StartDate && i.Date <= request.EndDate
                            select i).ToList();
            if (invoices.Count == 0)
                return StatusCode(1, "No invoices found in the given date range");
            var orders = new List<OrderDetailsResponse>();
            foreach (var invoice in invoices)
            {
                var shipping = (from s in db.Shippings
                                where s.InvoiceId == invoice.InvoiceId
                                select s).FirstOrDefault();
                var purchases = (from p in db.Purchases
                                 where p.InvoiceId == invoice.InvoiceId
                                 select p).ToList();
                var order = new OrderDetailsResponse
                {
                    Invoice = invoice,
                    Shipping = shipping,
                    Purchases = purchases
                };
                orders.Add(order);
            }
            return StatusCode(0, orders);
        }
    }
}
