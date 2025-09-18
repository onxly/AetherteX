using AeatherteX_API.Functions;
using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/users")]
    public class UserController : ControllerBase
    {
        private readonly Database1Context db = new Database1Context();

        public class LoginRequest
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public class RegisterRequest
        {
            public string Name { get; set; }
            public string Surname { get; set; }
            public string Email { get; set; }
            public string PhoneNumber { get; set; }
            public string Password { get; set; }
            public string Type { get; set; }
        }

        // POST: AeatherAPI/users/login
        [HttpPost("login")]
        public ActionResult<User> Login([FromBody] LoginRequest request) // Login in user using email and password
        {
            var user = (from u in db.Users
                        where u.Email.Equals(request.Email)
                        select u).FirstOrDefault();

            if (user == null)
                return StatusCode(1, "Email does not exist");

            if (!Secrecy.VerifyPassword(request.Password, user.Password))
            {
                return StatusCode(1, "Incorrect password");
            }

                return StatusCode(0, user);
        }

        // POST: AeatherAPI/users/register
        [HttpPost("register")]
        public ActionResult<int> Register([FromBody] RegisterRequest request) // Register a new user given name, surname, email, phone number, password and type
        {

            // Check if email already exists
            var existingUser = (from u in db.Users
                                where u.Email.Equals(request.Email)
                                select u).FirstOrDefault();

            if (existingUser != null)
                return StatusCode(1, "Email already registered");

            var newUser = new User
            {
                Name = request.Name,
                Surname = request.Surname,
                Email = request.Email,
                PhoneNumber = request.PhoneNumber,
                Password = Secrecy.HashPassword(request.Password),
                Type = request.Type
            };

            db.Users.Add(newUser);
            try {
                db.SaveChanges();
            }
            catch(DbUpdateException ex)
            {
                ex.GetBaseException();
                return StatusCode(-1, "Database update error");
            }
            

            return StatusCode(0, newUser.UserId);
        }
        

        // GET: AeatherAPI/users/test
        [HttpGet("test")]
        public IActionResult Index()
        {
            return Ok("API is online!!!");
        }
    }

    
}
