using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/ratings")]
    public class RatingController : ControllerBase
    {
        private readonly Database1Context db;

        public RatingController(Database1Context context)
        {
            db = context;
        }

        public class AddRatingRequest
        {
            public int Stars { get; set; }
            public string? Review { get; set; }
            public int UserId { get; set; }
            public int ProductId { get; set; }
        }

        public class RatingResponse
        {
            public int RatingId { get; set; }
            public int Stars { get; set; }
            public DateTime DatePosted { get; set; }
            public string? Review { get; set; }
            public int UserId { get; set; }
            public string? UserName { get; set; }

        }

        // GET: AeatherAPI/ratings/{id}
        [HttpGet("{id}")]
        public ActionResult<List<RatingResponse>> GetRatings(int id) // Get all ratings for a specific product
        {
            var product = (from p in db.Products
                           where p.ProductId == id
                           select p).FirstOrDefault();
            if (product == null)
                return NotFound("Product not found");

            
            var ratings = (from r in db.Ratings
                           where r.ProductId == id
                           select r).ToList();

            if (ratings == null || ratings.Count == 0)
                return NotFound("No ratings found for this product");

            var response = new List<RatingResponse>();

            foreach (var rating in ratings)
            {
                var client = (from c in db.Clients
                            where c.ClientId == rating.UserId
                            select c).FirstOrDefault();

                if (client == null)
                    continue; // Skip if user not found

                response.Add(new RatingResponse
                {
                    RatingId = rating.RatingId,
                    Stars = rating.Stars,
                    DatePosted = rating.DatePosted,
                    Review = rating.Review,
                    UserId = rating.UserId,
                    UserName = client.Username
                });
            }

            return Ok(response);

        }

        // POST: AeatherAPI/ratings
        [HttpPost]
        public ActionResult<int> AddRating([FromBody] AddRatingRequest request) // Add a new rating for a product by a user
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
            var newRating = new Rating
            {
                Stars = request.Stars,
                DatePosted = DateTime.Now,
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
                return StatusCode(StatusCodes.Status500InternalServerError,"Database update error");
            }
            return Ok();
        }

        // GET: AeatherAPI/ratings/average/{id}
        [HttpGet("average/{id}")]
        public ActionResult<double> GetAverageRating(int id) // Get average rating for a specific product
        {
            var product = (from p in db.Products
                           where p.ProductId == id
                           select p).FirstOrDefault();
            if (product == null)
                return NotFound("Product not found");
            var ratings = (from r in db.Ratings
                           where r.ProductId == id
                           select r).ToList();
            if (ratings == null || ratings.Count == 0)
                return NotFound("No ratings found for this product");
            double average = ratings.Average(r => r.Stars);

            return Ok(average);
        }

    }
}
