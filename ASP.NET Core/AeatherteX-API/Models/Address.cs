using System;
using System.Collections.Generic;

namespace AeatherteX_API.Models;

public partial class Address
{
    public int AddressId { get; set; }

    public string Line1 { get; set; } = null!;

    public string Line2 { get; set; } = null!;

    public string City { get; set; } = null!;

    public string Region { get; set; } = null!;

    public string PostalCode { get; set; } = null!;

    public virtual ICollection<Client> ClientAddress1Navigations { get; set; } = new List<Client>();

    public virtual ICollection<Client> ClientAddress2Navigations { get; set; } = new List<Client>();

    public virtual ICollection<Invoice> Invoices { get; set; } = new List<Invoice>();

    public virtual ICollection<Shipping> Shippings { get; set; } = new List<Shipping>();
}
