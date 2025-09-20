using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/ratings")]
    public class RatingController : ControllerBase
    {
        private readonly Database1Context db = new Database1Context();

        public class AddRatingRequest
        {
            public int Stars { get; set; }
            public string? Review { get; set; }
            public int UserId { get; set; }
            public int ProductId { get; set; }
        }

        // GET: AeatherAPI/ratings/{id}
        [HttpGet("{id}")]
        public ActionResult<List<Rating>> GetRatings(int id) // Get all ratings for a specific product
        {
            var ratings = (from r in db.Ratings
                           where r.ProductId == id
                           select r).ToList();
            if (ratings == null || ratings.Count == 0)
                return StatusCode(1, "No ratings found for this product");
            var ratingsResponse = ratings.Select(r => new Rating
            {
                RatingId = r.RatingId,
                Stars = r.Stars,
                DatePosted = r.DatePosted,
                Review = r.Review,
                UserId = r.UserId,
                ProductId = r.ProductId,
            }).ToList();
            return StatusCode(0, ratingsResponse);
        }

        // POST: AeatherAPI/ratings
        [HttpPost]
        public ActionResult<int> AddRating([FromBody] AddRatingRequest request) // Add a new rating for a product by a user
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
            var newRating = new Rating
            {
                Stars = request.Stars,
                DatePosted = DateOnly.FromDateTime(DateTime.Now),
                Review = request.Review,
                UserId = request.UserId,
                ProductId = request.ProductId
            };
            db.Ratings.Add(newRating);
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException ex)
            {
                ex.GetBaseException();
                return StatusCode(-1, "Database update error");
            }
            return StatusCode(0, "Rating added successfully");
        }

        // GET: AeatherAPI/ratings/average/{id}
        [HttpGet("average/{id}")]
        public ActionResult<double> GetAverageRating(int id) // Get average rating for a specific product
        {
            var product = (from p in db.Products
                           where p.ProductId == id
                           select p).FirstOrDefault();
            if (product == null)
                return StatusCode(1, "Product not found");
            var ratings = (from r in db.Ratings
                           where r.ProductId == id
                           select r).ToList();
            if (ratings == null || ratings.Count == 0)
                return StatusCode(1, "No ratings found for this product");
            double average = ratings.Average(r => r.Stars);
            return StatusCode(0, average);
        }

    }
}
