using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/address")]
    public class AddressController : ControllerBase
    {
        private readonly Database1Context db = new Database1Context();

        // GET: AeatherAPI/address/{id}
        [HttpGet("{id}")]
        public ActionResult<Address> GetAddress(int id)
        {
            var address = (from a in db.Addresses
                           where a.AddressId == id
                           select a).FirstOrDefault();

            if (address == null)
                return StatusCode(1, "Address not found");

            return StatusCode(0, address);
        }
    }
}
