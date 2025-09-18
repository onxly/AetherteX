using System;
using System.Collections.Generic;

namespace AeatherteX_API.Models;

public partial class Client
{
    public int ClientId { get; set; }

    public string? Username { get; set; }

    public int? LoyaltyPoints { get; set; }

    public int? IsPremium { get; set; }

    public int? Address1 { get; set; }

    public int? Address2 { get; set; }

    public virtual Address? Address1Navigation { get; set; }

    public virtual Address? Address2Navigation { get; set; }

    public virtual User ClientNavigation { get; set; } = null!;

    public virtual ICollection<Invoice> Invoices { get; set; } = new List<Invoice>();

    public virtual ICollection<Shipping> Shippings { get; set; } = new List<Shipping>();
}
