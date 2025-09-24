using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/cart")]
    public class CartController : ControllerBase
    {
        private readonly Database1Context db;

        public CartController(Database1Context context)
        {
            db = context;
        }

        public class CartItem
        {
           public string Title { get; set; }
           public double Price { get; set; }
           public string Image { get; set; }

        }

        public class GetCartResponse
        {
            public CartItem Product { get; set; }
            public int Quantity { get; set; }
            public decimal Price { get; set; }
        }

        public class UpdateCartRequest
        {
            public int ProductId { get; set; }
            public int Quantity { get; set; }
        }

        // Get: AeatherAPI/cart/{id}
        [HttpGet("{id}")]
        public ActionResult<List<GetCartResponse>> GetCart(int id) // Get cart for a specific user
        {
            var user = (from u in db.Users
                        where u.UserId == id
                        select u).FirstOrDefault();
            if (user == null)
                return NotFound("User not found");
            var cartItems = (from c in db.Carts
                             where c.UserId == id
                             select new GetCartResponse
                             {
                                 Product = new CartItem
                                 {
                                     Title = c.Product.Title,
                                     Price = (double)c.Product.Price,
                                     Image = c.Product.Image1
                                 },
                                 Quantity = c.Quantity ?? 0,
                                 Price = c.Price ?? 0
                             }).ToList();
            return Ok(cartItems);
        }

        // POST: AeatherAPI/cart/{id}
        [HttpPost("{id}")]
        public ActionResult AddToCart(int id, [FromBody] UpdateCartRequest request) // Add a product to the cart
        {
            var user = (from u in db.Users
                        where u.UserId == id
                        select u).FirstOrDefault();
            if (user == null)
                return NotFound("User not found");
            var product = (from p in db.Products
                           where p.ProductId == request.ProductId && p.IsActive == 1
                           select p).FirstOrDefault();
            if (product == null)
                return NotFound("Product not found");
            var cartItem = (from c in db.Carts
                            where c.UserId == id && c.ProductId == request.ProductId
                            select c).FirstOrDefault();
            if (cartItem != null)
            {
                cartItem.Quantity += request.Quantity;
                cartItem.Price = product.Price * cartItem.Quantity;
                db.Carts.Update(cartItem);
            }
            else
            {
                var newCartItem = new Cart
                {
                    UserId = id,
                    ProductId = request.ProductId,
                    Quantity = request.Quantity,
                    Price = product.Price * request.Quantity
                };
                db.Carts.Add(newCartItem);
            }
            db.SaveChanges();
            return Ok();

        }

        // DELETE: AeatherAPI/cart/{id}
        [HttpDelete("{id}")]
        public ActionResult RemoveFromCart(int id, [FromBody] UpdateCartRequest request) // Remove a product from the cart
        {
            var user = (from u in db.Users
                        where u.UserId == id
                        select u).FirstOrDefault();
            if (user == null)
                return NotFound("User not found");
            var product = (from p in db.Products
                           where p.ProductId == request.ProductId && p.IsActive.Equals(1)
                           select p).FirstOrDefault();
            if (product == null)
                return NotFound("Product not found");
            var cartItem = (from c in db.Carts
                            where c.UserId == id && c.ProductId == request.ProductId
                            select c).FirstOrDefault();
            if (cartItem == null)
                return NotFound("Product not found in cart");
            if (cartItem.Quantity <= request.Quantity)
            {
                db.Carts.Remove(cartItem);
            }
            else
            {
                cartItem.Quantity -= request.Quantity;
                cartItem.Price -= product.Price * request.Quantity;
                db.Carts.Update(cartItem);
            }
            db.SaveChanges();
            return Ok();
        }

        // DELETE: AeatherAPI/cart/clear/{id}
        [HttpDelete("clear/{id}")]
        public ActionResult ClearCart(int id) // Clear the cart for a specific user
        {
            var user = (from u in db.Users
                        where u.UserId == id
                        select u).FirstOrDefault();
            if (user == null)
                return NotFound("User not found");
            var cartItems = (from c in db.Carts
                             where c.UserId == id
                             select c).ToList();
            if (cartItems.Count == 0)
                return Ok("Cart is already empty");
            db.Carts.RemoveRange(cartItems);
            db.SaveChanges();
            return Ok("Cart cleared");
        }
    }
}
