using System;
using System.Collections.Generic;
using AeatherteX_API.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace AeatherteX_API.Models;

public partial class Cart
{
    public int UserId { get; set; }

    public int ProductId { get; set; }

    public int? Quantity { get; set; }

    public decimal? Price { get; set; }

    public virtual Product Product { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}


