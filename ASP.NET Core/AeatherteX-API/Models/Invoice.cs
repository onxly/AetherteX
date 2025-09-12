using System;
using System.Collections.Generic;

namespace AeatherteX_API.Models;

public partial class Invoice
{
    public int InvoiceId { get; set; }

    public int Quantity { get; set; }

    public decimal Price { get; set; }

    public DateOnly Date { get; set; }

    public int AddressId { get; set; }

    public int ClientId { get; set; }

    public virtual Address Address { get; set; } = null!;

    public virtual Client Client { get; set; } = null!;

    public virtual ICollection<Purchase> Purchases { get; set; } = new List<Purchase>();
}
