using System;
using System.Collections.Generic;

namespace AeatherteX_API.Models;

public partial class Rating
{
    public int RatingId { get; set; }

    public int Stars { get; set; }

    public DateOnly DatePosted { get; set; }

    public string? Review { get; set; }

    public int UserId { get; set; }

    public int ProductId { get; set; }

    public virtual Product Product { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
