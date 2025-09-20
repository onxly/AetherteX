using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/wishlist")]
    public class WishlistController : ControllerBase
    {
        private readonly Database1Context db = new Database1Context();

        public class UpdateWishlistRequest
        {
            public int UserId { get; set; }
            public int ProductId { get; set; }
        }

        // GET: AeatherAPI/wishlist/{id}
        [HttpGet("{id}")]
        public ActionResult<List<Product>> GetWishlist(int id) // Get wishlist for a specific user
        {
            var user = (from u in db.Users
                        where u.UserId == id
                        select u).FirstOrDefault();
            if (user == null)
                return StatusCode(1, "User not found");
            var wishlistItems = (from w in db.Wishlists
                                 where w.UserId == id
                                 select w).ToList();
            if (wishlistItems.Count == 0)
                return StatusCode(1, "Wishlist is empty");
            var wishlist = new List<Product>();
            foreach (var item in wishlistItems)
            {
                var product = (from p in db.Products
                               where p.ProductId == item.ProductId
                               select p).FirstOrDefault();
                if (product != null)
                {
                    wishlist.Add(product);
                }
            }
            return StatusCode(0, wishlist);
        }

        // POST: AeatherAPI/wishlist
        [HttpPost]
        public ActionResult AddToWishlist([FromBody] UpdateWishlistRequest request) // Add a product to the wishlist
        {
            var user = (from u in db.Users
                        where u.UserId == request.UserId
                        select u).FirstOrDefault();
            if (user == null)
                return StatusCode(1, "User not found");
            var product = (from p in db.Products
                           where p.ProductId == request.ProductId
                           select p).FirstOrDefault();
            if (product == null)
                return StatusCode(1, "Product not found");
            var wishlistItem = (from w in db.Wishlists
                                where w.UserId == request.UserId && w.ProductId == request.ProductId
                                select w).FirstOrDefault();
            if (wishlistItem != null)
                return StatusCode(1, "Product already in wishlist");
            var newWishlistItem = new Wishlist
            {
                UserId = request.UserId,
                ProductId = request.ProductId,
                Quantity = 1,
                Price = product.Price
            };
            db.Wishlists.Add(newWishlistItem);
            db.SaveChanges();
            return StatusCode(0, "Product added to wishlist");
        }

        // DELETE: AeatherAPI/wishlist
        [HttpDelete]
        public ActionResult RemoveFromWishlist([FromBody] UpdateWishlistRequest request) // Remove a product from the wishlist
        {
            var user = (from u in db.Users
                        where u.UserId == request.UserId
                        select u).FirstOrDefault();
            if (user == null)
                return StatusCode(1, "User not found");
            var product = (from p in db.Products
                           where p.ProductId == request.ProductId
                           select p).FirstOrDefault();
            if (product == null)
                return StatusCode(1, "Product not found");
            var wishlistItem = (from w in db.Wishlists
                                where w.UserId == request.UserId && w.ProductId == request.ProductId
                                select w).FirstOrDefault();
            if (wishlistItem == null)
                return StatusCode(1, "Product not in wishlist");
            db.Wishlists.Remove(wishlistItem);
            db.SaveChanges();
            return StatusCode(0, "Product removed from wishlist");
        }
    }
}
