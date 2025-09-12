using System;
using System.Collections.Generic;

namespace AeatherteX_API.Models;

public partial class Shipping
{
    public int AddressId { get; set; }

    public int ClientId { get; set; }

    public string? Instructions { get; set; }

    public virtual Address Address { get; set; } = null!;

    public virtual Client Client { get; set; } = null!;
}
