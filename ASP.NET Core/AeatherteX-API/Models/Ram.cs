using System;
using System.Collections.Generic;

namespace AeatherteX_API.Models;

public partial class Ram
{
    public int RamId { get; set; }

    public string Name { get; set; } = null!;

    public int Capacity { get; set; }

    public string Type { get; set; } = null!;

    public int Speed { get; set; }

    public decimal BenchmarkScore { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
