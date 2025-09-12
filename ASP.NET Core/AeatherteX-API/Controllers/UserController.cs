using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/users")]
    public class UserController : ControllerBase
    {
        private readonly Database1Context db = new Database1Context();
    }
}
