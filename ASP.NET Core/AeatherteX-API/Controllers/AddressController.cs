using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/address")]
    public class AddressController : ControllerBase
    {
        private readonly Database1Context db = new Database1Context();

        public class CreateAddressRequest
        {
            public int ClientId { get; set; }
            public string Line1 { get; set; }
            public string? Line2 { get; set; }
            public string City { get; set; }
            public string Region { get; set; }
            public string PostalCode { get; set; }
        }

        public class UpdateAddressRequest
        {
            public int ClientId { get; set; }
            public int AddressId { get; set; }
            public string? Line1 { get; set; }
            public string? Line2 { get; set; }
            public string? City { get; set; }
            public string? Region { get; set; }
            public string? PostalCode { get; set; }
        }

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

        // POST: AeatherAPI/address
        [HttpPost]
        public ActionResult<int> CreateAddress([FromBody] CreateAddressRequest request) // Create a new address and associate it with a client
        {
            var client = (from c in db.Clients
                          where c.ClientId == request.ClientId
                          select c).FirstOrDefault();
            if (client == null)
                return StatusCode(1, "Client not found");

            if(client.Address1 != null && client.Address2 != null)
                return StatusCode(1, "Client already has two addresses");

            var newAddress = new Address
            {
                Line1 = request.Line1,
                Line2 = request.Line2,
                City = request.City,
                Region = request.Region,
                PostalCode = request.PostalCode
            };

            var existingAddress = (from a in db.Addresses
                                   where a.Line1 == newAddress.Line1 &&
                                         a.Line2 == newAddress.Line2 &&
                                         a.City == newAddress.City &&
                                         a.Region == newAddress.Region &&
                                         a.PostalCode == newAddress.PostalCode
                                   select a).FirstOrDefault();

            if (existingAddress != null) {
                
                if(client.Address1 == null)
                {
                    client.Address1 = existingAddress.AddressId;
                }
                else
                {
                    client.Address2 = existingAddress.AddressId;
                }

                db.SaveChanges();
                return StatusCode(1, existingAddress.AddressId);
            }
                
            db.Addresses.Add(newAddress);
            db.SaveChanges();

            if (client.Address1 == null)
            {
                client.Address1 = newAddress.AddressId;
            }
            else
            {
                client.Address2 = newAddress.AddressId;
            }
            db.SaveChanges();
            return StatusCode(0, newAddress.AddressId);
        }

        // PUT: AeatherAPI/address
        [HttpPut]
        public ActionResult UpdateAddress([FromBody] UpdateAddressRequest request) // Update an existing address associated with a client
        {
            var client = (from c in db.Clients
                          where c.ClientId == request.ClientId
                          select c).FirstOrDefault();
            if (client == null)
                return StatusCode(1, "Client not found");
            if (client.Address1 != request.AddressId && client.Address2 != request.AddressId)
                return StatusCode(1, "Address not associated with client");
            var address = (from a in db.Addresses
                           where a.AddressId == request.AddressId
                           select a).FirstOrDefault();
            if (address == null)
                return StatusCode(1, "Address not found");
            if (request.Line1 != null)
                address.Line1 = request.Line1;
            if (request.Line2 != null)
                address.Line2 = request.Line2;
            if (request.City != null)
                address.City = request.City;
            if (request.Region != null)
                address.Region = request.Region;
            if (request.PostalCode != null)
                address.PostalCode = request.PostalCode;
            db.SaveChanges();
            return StatusCode(0, "Address updated successfully");
        }
    }
}
