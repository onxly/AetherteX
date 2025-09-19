using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace AeatherteX_API.Controllers
{
    public class CartController : ControllerBase
    {
        private readonly Database1Context db = new Database1Context();

        public class GetCartResponse
        {
            public Product Product { get; set; }
            public int Quantity { get; set; }
            public decimal Price { get; set; }
        }

        public class UpdateCartRequest
        {
            public int ProductId { get; set; }
            public int Quantity { get; set; }
        }

        public class ClearCartRequest
        {
            public int UserId { get; set; }
        }

        // Get: AeatherAPI/cart/{id}
        [HttpGet("{id}")]
        public ActionResult<List<GetCartResponse>> GetCart(int id) // Get cart for a specific user
        {
            var user = (from u in db.Users
                        where u.UserId == id
                        select u).FirstOrDefault();
            if (user == null)
                return StatusCode(1, "User not found");
            var cartItems = (from c in db.Carts
                             where c.UserId == id
                             select c).ToList();
            if (cartItems.Count == 0)
                return StatusCode(1, "Cart is empty");
            var cart = new List<GetCartResponse>();
            foreach (var item in cartItems)
            {
                var product = (from p in db.Products
                               where p.ProductId == item.ProductId && p.IsActive == 1
                               select p).FirstOrDefault();
                if (product != null)
                {
                    cart.Add(new GetCartResponse
                    {
                        Product = product,
                        Quantity = item.Quantity ?? 0,
                        Price = product.Price * (item.Quantity ?? 0)
                    });
                }
            }
            return StatusCode(0, cart);
        }

        // POST: AeatherAPI/cart/{id}
        [HttpPost]
        public ActionResult AddToCart(int id, [FromBody] UpdateCartRequest request) // Add a product to the cart
        {
            var user = (from u in db.Users
                        where u.UserId == id
                        select u).FirstOrDefault();
            if (user == null)
                return StatusCode(1, "User not found");
            var product = (from p in db.Products
                           where p.ProductId == request.ProductId && p.IsActive == 1
                           select p).FirstOrDefault();
            if (product == null)
                return StatusCode(1, "Product not found");
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
            return StatusCode(0, "Product added to cart");

        }

        // DELETE: AeatherAPI/cart/{id}
        [HttpDelete("{id}")]
        public ActionResult RemoveFromCart(int id, [FromBody] UpdateCartRequest request) // Remove a product from the cart
        {
            var user = (from u in db.Users
                        where u.UserId == id
                        select u).FirstOrDefault();
            if (user == null)
                return StatusCode(1, "User not found");
            var product = (from p in db.Products
                           where p.ProductId == request.ProductId && p.IsActive.Equals(1)
                           select p).FirstOrDefault();
            if (product == null)
                return StatusCode(1, "Product not found");
            var cartItem = (from c in db.Carts
                            where c.UserId == id && c.ProductId == request.ProductId
                            select c).FirstOrDefault();
            if (cartItem == null)
                return StatusCode(1, "Product not found in cart");
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
            return StatusCode(0, "Product removed from cart");
        }

        // DELETE: AeatherAPI/cart/clear
        [HttpDelete("clear")]
        public ActionResult ClearCart([FromBody] ClearCartRequest request) // Clear the cart for a specific user
        {
            var user = (from u in db.Users
                        where u.UserId == request.UserId
                        select u).FirstOrDefault();
            if (user == null)
                return StatusCode(1, "User not found");
            var cartItems = (from c in db.Carts
                             where c.UserId == request.UserId
                             select c).ToList();
            if (cartItems.Count == 0)
                return StatusCode(1, "Cart is already empty");
            db.Carts.RemoveRange(cartItems);
            db.SaveChanges();
            return StatusCode(0, "Cart cleared");
        }
    }
}
