using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/wishlist")]
    public class WishlistController : ControllerBase
    {
        private readonly Database1Context db;

        public WishlistController(Database1Context context)
        {
            db = context;
        }

        public class UpdateWishlistRequest
        {
            public int UserId { get; set; }
            public int ProductId { get; set; }
        }

        public class WishlistResponse
        {
            public int ProductId { get; set; }
            public string Title { get; set; }
            public string Image1 { get; set; }
            public decimal Price { get; set; }
            public int IsActive { get; set; }
            public int Stock { get; set; }
        }

        // GET: AeatherAPI/wishlist/{id}
        [HttpGet("{id}")]
        public ActionResult<List<WishlistResponse>> GetWishlist(int id) // Get wishlist for a specific user
        {
            var user = (from u in db.Users
                        where u.UserId == id
                        select u).FirstOrDefault();
            if (user == null)
                return NotFound("User not found");
            var wishlistItems = (from w in db.Wishlists
                                 where w.UserId == id
                                 select w).ToList();
            var wishlistItemsDetails = new List<WishlistResponse>();
            foreach (var item in wishlistItems)
            {
                var product = (from p in db.Products
                               where p.ProductId == item.ProductId
                               select p).FirstOrDefault();
                if (product != null)
                {
                    wishlistItemsDetails.Add(new WishlistResponse
                    {
                        ProductId = product.ProductId,
                        Title = product.Title,
                        Image1 = product.Image1,
                        Price = product.Price,
                        IsActive = product.IsActive,
                        Stock = product.Stock
                    });
                }
            }
            return Ok(wishlistItems);
        }

        // POST: AeatherAPI/wishlist
        [HttpPost]
        public ActionResult AddToWishlist([FromBody] UpdateWishlistRequest request) // Add a product to the wishlist
        {
            var user = (from u in db.Users
                        where u.UserId == request.UserId
                        select u).FirstOrDefault();
            if (user == null)
                return NotFound("User not found");
            var product = (from p in db.Products
                           where p.ProductId == request.ProductId
                           select p).FirstOrDefault();
            if (product == null)
                return NotFound("Product not found");
            var wishlistItem = (from w in db.Wishlists
                                where w.UserId == request.UserId && w.ProductId == request.ProductId
                                select w).FirstOrDefault();
            if (wishlistItem != null)
                return Conflict("Product already in wishlist");
            var newWishlistItem = new Wishlist
            {
                UserId = request.UserId,
                ProductId = request.ProductId,
                Quantity = 1,
                Price = product.Price
            };
            db.Wishlists.Add(newWishlistItem);
            db.SaveChanges();
            return Ok();
        }

        // DELETE: AeatherAPI/wishlist
        [HttpDelete]
        public ActionResult RemoveFromWishlist([FromBody] UpdateWishlistRequest request) // Remove a product from the wishlist
        {
            var user = (from u in db.Users
                        where u.UserId == request.UserId
                        select u).FirstOrDefault();
            if (user == null)
                return NotFound("User not found");
            var product = (from p in db.Products
                           where p.ProductId == request.ProductId
                           select p).FirstOrDefault();
            if (product == null)
                return NotFound("Product not found");
            var wishlistItem = (from w in db.Wishlists
                                where w.UserId == request.UserId && w.ProductId == request.ProductId
                                select w).FirstOrDefault();
            if (wishlistItem == null)
                return Ok();
            db.Wishlists.Remove(wishlistItem);
            db.SaveChanges();
            return Ok();
        }

        // DELETE: AeatherAPI/wishlist/clear/{id}
        [HttpDelete("clear/{id}")]
        public ActionResult ClearWishlist(int id) // Clear the wishlist for a specific user
        {
            var user = (from u in db.Users
                        where u.UserId == id
                        select u).FirstOrDefault();
            if (user == null)
                return NotFound("User not found");
            var wishlistItems = (from w in db.Wishlists
                                 where w.UserId == id
                                 select w).ToList();
            if (wishlistItems.Count == 0)
                return Ok();
            db.Wishlists.RemoveRange(wishlistItems);
            db.SaveChanges();
            return Ok();
        }
    }
}
