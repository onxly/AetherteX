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
        private readonly Database1Context db;

        public UserController(Database1Context context)
        {
            db = context;
        }

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
        }

        public class UpdateRequest
        {
            public string? Name { get; set; }
            public string? Surname { get; set; }
            public string? Username { get; set; }
            public string? Email { get; set; }
            public string? PhoneNumber { get; set; }
        }

        public class ChangePasswordRequest
        {
            public int UserId { get; set; }
            public string OldPassword { get; set; }
            public string NewPassword { get; set; }
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

        public class UserResponse
        {
            public int UserId { get; set; }
            public string Username { get; set; }
            public string Name { get; set; }
            public string Surname { get; set; }
            public string Email { get; set; }
            public string PhoneNumber { get; set; }
            public string Type { get; set; }
        }

        // POST: AeatherAPI/users/login
        [HttpPost("login")]
        public ActionResult<UserResponse> Login([FromBody] LoginRequest request) // Login in user using email and password
        {
            var user = (from u in db.Users
                        where u.Email.Equals(request.Email)
                        select u).FirstOrDefault();

            if (user == null)
                return NotFound("Email does not exist");

            if (!Secrecy.VerifyPassword(request.Password, user.Password))
            {
                return Unauthorized("Incorrect password");
            }

            var userResponse = new UserResponse
            {
                UserId = user.UserId,
                Name = user.Name,
                Surname = user.Surname,
                Email = user.Email,
                PhoneNumber = user.PhoneNumber,
                Type = user.Type,
            };

            var client = (from c in db.Clients
                          where c.ClientId == user.UserId
                          select c).FirstOrDefault();

            if (client != null)
            {
                userResponse.Username = client.Username;

            }else
            {
                var admin = (from a in db.Admins
                             where a.UserId == user.UserId
                             select a).FirstOrDefault();
                if (admin != null)
                {
                    userResponse.Username = "admin #" + admin.UserId;
                }
            }

            HttpContext.Session.SetInt32("userId", userResponse.UserId);

            return Ok(userResponse);
        }

        // POST: AeatherAPI/users/logout
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            try
            {
                HttpContext.Session.Clear();
                return Ok();
            }
            catch (Exception ex)
            {
                ex.GetBaseException();
                return Unauthorized();
            }
            
        }

        // GET: AeatherAPI/users/me
        /*[HttpGet("me")]*/
        /*public ActionResult<UserResponse> GetCurrentUser() // Get the currently logged-in user's ID from the session
        {
            var id = HttpContext.Session.GetString("userId");

            if (string.IsNullOrEmpty(id))
                return BadRequest("User is not logged in");

            var user = (from u in db.Users
                        where u.UserId.ToString() == id
                        select u).FirstOrDefault();
            if (user == null)
                return NotFound("User not found");
            
            var userResponse = new UserResponse
            {
                UserId = user.UserId,
                Name = user.Name,
                Surname = user.Surname,
                Email = user.Email,
                PhoneNumber = user.PhoneNumber,
                Type = user.Type,
            };

            var client = (from c in db.Clients
                          where c.ClientId == user.UserId
                          select c).FirstOrDefault();
            if (client != null)
            {
                userResponse.Client = new Client
                {
                    ClientId = client.ClientId,
                    Username = client.Username,
                    LoyaltyPoints = client.LoyaltyPoints,
                    IsPremium = client.IsPremium,
                    Address1 = client.Address1,
                    Address2 = client.Address2
                };
            }
            else
            {
                var admin = (from a in db.Admins
                             where a.UserId == user.UserId
                             select a).FirstOrDefault();
                if (admin != null)
                {
                    userResponse.Admin = new Admin
                    {
                        UserId = admin.UserId,
                        AdminCode = admin.AdminCode
                    };
                }
            }
            return Ok(userResponse);
        }*/

        // POST: AeatherAPI/users/verifyadmin
        [HttpPost("verifyadmin")]
        public ActionResult<bool> VerifyAdmin([FromBody] VerifyAdminRequest request) // Verify if user is an admin using userId and admin code
        {
            var admin = (from a in db.Admins
                         where a.UserId == request.UserId && a.AdminCode.Equals(request.AdminCode)
                         select a).FirstOrDefault();

            if (admin == null)
                return Ok(false);
            return Ok(true);
        }

        // POST: AeatherAPI/users/register
        [HttpPost("register")]
        public ActionResult<int> Register([FromBody] RegisterRequest request) // Register a new user given name, surname, email, phone number and password
        {
            // Check if email already exists
            var existingUser = (from u in db.Users
                                where u.Email.Equals(request.Email)
                                select u).FirstOrDefault();

            if (existingUser != null)
                return BadRequest("Email already registered");

            string userType = "client"; // Default user type

            if(request.Password == Secrecy.HashPassword(Secrecy.AdminPassword))
            {
                userType = "admin";
            }

            var newUser = new User
            {
                Name = request.Name,
                Surname = request.Surname,
                Email = request.Email,
                PhoneNumber = request.PhoneNumber,
                Password = request.Password,
                Type = userType
            };

            db.Users.Add(newUser);
            try {
                db.SaveChanges();
            }
            catch(DbUpdateException ex)
            {
                ex.GetBaseException();
                return StatusCode(StatusCodes.Status500InternalServerError, "Database update error");
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
            else
            { 
                var newClient = new Client
                {
                    ClientId = newUser.UserId,
                    Username = (request.Name).ToLower(),
                    LoyaltyPoints = 0,
                    IsPremium = 0,
                    Address1 = null,
                    Address2 = null
                };
                db.Clients.Add(newClient);
            }

            db.SaveChanges();

            return Ok(newUser.UserId);
        }

        // PUT: AeatherAPI/users/update/{id}
        [HttpPut("update/{id}")]
        public ActionResult<UserResponse> Update(int id, [FromBody] UpdateRequest request) // Update user information given userId and new information
        {
            var user = (from u in db.Users
                        where u.UserId == id
                        select u).FirstOrDefault();
            if (user == null)
                return NotFound("User not found");
            if (!string.IsNullOrEmpty(request.Name))
                user.Name = request.Name;
            if (!string.IsNullOrEmpty(request.Surname))
                user.Surname = request.Surname;
            if (!string.IsNullOrEmpty(request.Username))
            {
                var tempClient = (from c in db.Clients
                              where c.ClientId == id
                              select c).FirstOrDefault();
                if (tempClient != null)
                {
                    tempClient.Username = request.Username;
                }
                else
                {
                    return BadRequest("Only clients can update their username");
                }
            }
            if (!string.IsNullOrEmpty(request.Email))
                user.Email = request.Email;
            if (!string.IsNullOrEmpty(request.PhoneNumber))
                user.PhoneNumber = request.PhoneNumber;
            try {
                db.SaveChanges();
            }
            catch(DbUpdateException ex)
            {
                ex.GetBaseException();
                return StatusCode(StatusCodes.Status500InternalServerError, "Database update error");
            }

            var userResponse = new UserResponse
            {
                UserId = user.UserId,
                Name = user.Name,
                Surname = user.Surname,
                Email = user.Email,
                PhoneNumber = user.PhoneNumber,
                Type = user.Type
            };

            var client = (from c in db.Clients
                          where c.ClientId == user.UserId
                          select c).FirstOrDefault();

            if (client != null)
            {
                userResponse.Username = client.Username;
            }

            return Ok(userResponse);
        }

        // PUT: AeatherAPI/users/changepassword
        [HttpPut("changepassword")]
        public ActionResult<int> ChangePassword([FromBody] ChangePasswordRequest request) // Change user password given userId, old password and new password
        {
            var user = (from u in db.Users
                        where u.UserId == request.UserId
                        select u).FirstOrDefault();
            if (user == null)
                return NotFound("User not found");
            if (!Secrecy.VerifyPassword(request.OldPassword, user.Password))
                return Unauthorized("Incorrect old password");
            user.Password = Secrecy.HashPassword(request.NewPassword);
            try {
                db.SaveChanges();
            }
            catch(DbUpdateException ex)
            {
                ex.GetBaseException();
                return StatusCode(StatusCodes.Status500InternalServerError, "Database update error");
            }
            return Ok("Password changed successfully");
        }

        // PUT: AeatherAPI/users/loyaltypoints
        [HttpPut("loyaltypoints")]
        public ActionResult<int> UpdateLoyaltyPoints([FromBody] UpdateLoyaltyPointsRequest request) // Update loyalty points for a specific client
        {
            var client = (from c in db.Clients
                          where c.ClientId == request.ClientId
                          select c).FirstOrDefault();
            if (client == null)
                return NotFound("Client not found");
            client.LoyaltyPoints = (client.LoyaltyPoints ?? 0) + request.PointsToAdd;
            try {
                db.SaveChanges();
            }
            catch(DbUpdateException ex)
            {
                ex.GetBaseException();
                return StatusCode(StatusCodes.Status500InternalServerError, "Database update error");
            }
            return Ok("Upadted Loyalty Points");
        }

        // GET: AeatherAPI/users/loyaltypoints/{id}
        [HttpGet("loyaltypoints/{id}")]
        public ActionResult<int> GetLoyaltyPoints(int id) // Get loyalty points for a specific client
        {
            var client = (from c in db.Clients
                          where c.ClientId == id
                          select c).FirstOrDefault();
            if (client == null)
                return NotFound("Client not found");
            return Ok(client.LoyaltyPoints ?? 0);
        }

        // PUT: AeatherAPI/users/premiumstatus
        [HttpPut("premiumstatus")]
        public ActionResult<int> UpdatePremiumStatus([FromBody] UpdatePremiumStatusRequest request) // Update premium status for a specific client
        {
            var client = (from c in db.Clients
                          where c.ClientId == request.ClientId
                          select c).FirstOrDefault();
            if (client == null)
                return NotFound("Client not found");
            client.IsPremium = request.IsPremium;
            try {
                db.SaveChanges();
            }
            catch(DbUpdateException ex)
            {
                ex.GetBaseException();
                return StatusCode(StatusCodes.Status500InternalServerError, "Database update error");
            }
            return Ok("Updated Premium Status");
        }

    }

}
