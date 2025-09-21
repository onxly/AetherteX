using AeatherteX_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace AeatherteX_API.Controllers
{
    [ApiController]
    [Route("AeatherAPI/address")]
    public class AddressController : ControllerBase
    {
        private readonly Database1Context db;

        public AddressController(Database1Context context)
        {
            db = context;
        }

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

        public class GetAddressResponse
        {
            public int AddressId { get; set; }
            public string Line1 { get; set; }
            public string Line2 { get; set; }
            public string City { get; set; }
            public string Region { get; set; }
            public string PostalCode { get; set; }
        }

        // GET: AeatherAPI/address/{id}
        [HttpGet("{id}")]
        public ActionResult<GetAddressResponse> GetAddress(int id) // Get address details by address ID
        {
            var address = (from a in db.Addresses
                           where a.AddressId == id
                           select a).FirstOrDefault();

            if (address == null)
                return NotFound("Address not found");

            var response = new GetAddressResponse
            {
                AddressId = address.AddressId,
                Line1 = address.Line1,
                Line2 = address.Line2,
                City = address.City,
                Region = address.Region,
                PostalCode = address.PostalCode
            };

            return Ok(response);
        }

        // GET: AeatherAPI/address/client/{clientId}
        [HttpGet("client/{clientId}")]
        public ActionResult<List<GetAddressResponse>> GetAddressesByClient(int clientId) // Get all addresses associated with a client
        {
            var client = (from c in db.Clients
                          where c.ClientId == clientId
                          select c).FirstOrDefault();
            if (client == null)
                return NotFound("Client not found");
            var addresses = new List<GetAddressResponse>();
            if (client.Address1 != null)
            {
                var address1 = (from a in db.Addresses
                                where a.AddressId == client.Address1
                                select a).FirstOrDefault();
                if (address1 != null)
                {
                    addresses.Add(new GetAddressResponse
                    {
                        AddressId = address1.AddressId,
                        Line1 = address1.Line1,
                        Line2 = address1.Line2,
                        City = address1.City,
                        Region = address1.Region,
                        PostalCode = address1.PostalCode
                    });
                }
            }
            if (client.Address2 != null)
            {
                var address2 = (from a in db.Addresses
                                where a.AddressId == client.Address2
                                select a).FirstOrDefault();
                if (address2 != null)
                {
                    addresses.Add(new GetAddressResponse
                    {
                        AddressId = address2.AddressId,
                        Line1 = address2.Line1,
                        Line2 = address2.Line2,
                        City = address2.City,
                        Region = address2.Region,
                        PostalCode = address2.PostalCode
                    });
                }
            }
            return Ok(addresses);
        }

        // DELETE: AeatherAPI/address/{clientId}/{addressId}
        [HttpDelete("{clientId}/{addressId}")]
        public ActionResult DeleteAddress(int clientId, int addressId) // Delete an address associated with a client
        {
            var client = (from c in db.Clients
                          where c.ClientId == clientId
                          select c).FirstOrDefault();
            if (client == null)
                return NotFound("Client not found");
            if (client.Address1 != addressId && client.Address2 != addressId)
                return NotFound("Address not associated with client");
            if (client.Address1 == addressId)
                client.Address1 = null;
            else
                client.Address2 = null;
            db.SaveChanges();
            return Ok();
        }

        // POST: AeatherAPI/address
        [HttpPost]
        public ActionResult<int> CreateAddress([FromBody] CreateAddressRequest request) // Create a new address and associate it with a client
        {
            var client = (from c in db.Clients
                          where c.ClientId == request.ClientId
                          select c).FirstOrDefault();
            if (client == null)
                return NotFound("Client not found");

            if(client.Address1 != null && client.Address2 != null)
                return NotFound("Client already has two addresses");

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
                return Ok(existingAddress.AddressId);
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
            return Ok(newAddress.AddressId);
        }

        // PUT: AeatherAPI/address
        [HttpPut]
        public ActionResult UpdateAddress([FromBody] UpdateAddressRequest request) // Update an existing address associated with a client
        {
            var client = (from c in db.Clients
                          where c.ClientId == request.ClientId
                          select c).FirstOrDefault();
            if (client == null)
                return NotFound("Client not found");
            if (client.Address1 != request.AddressId && client.Address2 != request.AddressId)
                return BadRequest("Address not associated with client");
            var address = (from a in db.Addresses
                           where a.AddressId == request.AddressId
                           select a).FirstOrDefault();
            if (address == null)
                return NotFound("Address not found");
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
            return Ok();
        }
    }
}
