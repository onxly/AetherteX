using System;
using System.Collections.Generic;

namespace AeatherteX_API.Models;

public partial class Shipping
{
    public int InvoiceId { get; set; }

    public string? Instructions { get; set; }

    public string Status { get; set; } = null!;

    public virtual Invoice Invoice { get; set; } = null!;
}
