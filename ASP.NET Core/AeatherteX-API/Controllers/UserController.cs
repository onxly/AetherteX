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

        public class VerifyAdminRequest
        {
            public int UserId { get; set; }
            public string AdminCode { get; set; }
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

        public class UpdateRequest
        {
            public string? Name { get; set; }
            public string? Surname { get; set; }
            public string? Email { get; set; }
            public string? PhoneNumber { get; set; }
            public string? Password { get; set; }
        }

        public class UpdateLoyaltyPointsRequest
        {
            public int ClientId { get; set; }
            public int PointsToAdd { get; set; }

        }

        public class UpdatePremiumStatusRequest
        {
            public int ClientId { get; set; }
            public int IsPremium { get; set; }

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

        // POST: AeatherAPI/users/verifyadmin
        [HttpPost("verifyadmin")]
        public ActionResult<bool> VerifyAdmin([FromBody] VerifyAdminRequest request) // Verify if user is an admin using userId and admin code
        {
            var admin = (from a in db.Admins
                         where a.UserId == request.UserId && a.AdminCode.Equals(request.AdminCode)
                         select a).FirstOrDefault();

            if (admin == null)
                return StatusCode(1, false);
            return StatusCode(0, true);
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
            
            if(newUser.Type == "admin")
            {
                var newAdmin = new Admin
                {
                    UserId = newUser.UserId,
                    AdminCode = Secrecy.GeneratePin()
                };
                db.Admins.Add(newAdmin);
            }

            return StatusCode(0, newUser.UserId);
        }

        // PUT: AeatherAPI/users/update/{id}
        [HttpPut("update/{id}")]
        public ActionResult<int> Update(int id, [FromBody] UpdateRequest request) // Update user information given userId and new information
        {
            var user = (from u in db.Users
                        where u.UserId == id
                        select u).FirstOrDefault();
            if (user == null)
                return StatusCode(1, "User not found");
            if (!string.IsNullOrEmpty(request.Name))
                user.Name = request.Name;
            if (!string.IsNullOrEmpty(request.Surname))
                user.Surname = request.Surname;
            if (!string.IsNullOrEmpty(request.Email))
                user.Email = request.Email;
            if (!string.IsNullOrEmpty(request.PhoneNumber))
                user.PhoneNumber = request.PhoneNumber;
            if (!string.IsNullOrEmpty(request.Password))
                user.Password = Secrecy.HashPassword(request.Password);
            try {
                db.SaveChanges();
            }
            catch(DbUpdateException ex)
            {
                ex.GetBaseException();
                return StatusCode(-1, "Database update error");
            }
            return StatusCode(0, user.UserId);
        }

        // PUT: AeatherAPI/users/loyaltypoints
        [HttpPut("loyaltypoints")]
        public ActionResult<int> UpdateLoyaltyPoints([FromBody] UpdateLoyaltyPointsRequest request) // Update loyalty points for a specific client
        {
            var client = (from c in db.Clients
                          where c.ClientId == request.ClientId
                          select c).FirstOrDefault();
            if (client == null)
                return StatusCode(1, "Client not found");
            client.LoyaltyPoints = (client.LoyaltyPoints ?? 0) + request.PointsToAdd;
            try {
                db.SaveChanges();
            }
            catch(DbUpdateException ex)
            {
                ex.GetBaseException();
                return StatusCode(-1, "Database update error");
            }
            return StatusCode(0, "Upadted Loyalty Points");
        }

        // GET: AeatherAPI/users/loyaltypoints/{id}
        [HttpGet("loyaltypoints/{id}")]
        public ActionResult<int> GetLoyaltyPoints(int id) // Get loyalty points for a specific client
        {
            var client = (from c in db.Clients
                          where c.ClientId == id
                          select c).FirstOrDefault();
            if (client == null)
                return StatusCode(1, "Client not found");
            return StatusCode(0, client.LoyaltyPoints ?? 0);
        }

        // PUT: AeatherAPI/users/premiumstatus
        [HttpPut("premiumstatus")]
        public ActionResult<int> UpdatePremiumStatus([FromBody] UpdatePremiumStatusRequest request) // Update premium status for a specific client
        {
            var client = (from c in db.Clients
                          where c.ClientId == request.ClientId
                          select c).FirstOrDefault();
            if (client == null)
                return StatusCode(1, "Client not found");
            client.IsPremium = request.IsPremium;
            try {
                db.SaveChanges();
            }
            catch(DbUpdateException ex)
            {
                ex.GetBaseException();
                return StatusCode(-1, "Database update error");
            }
            return StatusCode(0, "Updated Premium Status");
        }

    }


}
