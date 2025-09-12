using System;
using System.Collections.Generic;

namespace AeatherteX_API.Models;

public partial class Client
{
    public int ClientId { get; set; }

    public byte[] Username { get; set; } = null!;

    public int LoyaltyPoints { get; set; }

    public bool IsPremium { get; set; }

    public virtual User ClientNavigation { get; set; } = null!;

    public virtual ICollection<Invoice> Invoices { get; set; } = new List<Invoice>();

    public virtual ICollection<Shipping> Shippings { get; set; } = new List<Shipping>();
}
