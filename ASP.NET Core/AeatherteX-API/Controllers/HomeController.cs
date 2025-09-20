using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI")]
    public class HomeController : ControllerBase
    {
        // GET: AeatherAPI
        [HttpGet]
        public ActionResult<string> Get()
        {
            return Ok("API is online!");
        }
    }
}
