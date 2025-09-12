using System;
using System.Collections.Generic;

namespace AeatherteX_API.Models;

public partial class Admin
{
    public int UserId { get; set; }

    public string AdminCode { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
