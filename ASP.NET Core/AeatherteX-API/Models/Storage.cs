using System;
using System.Collections.Generic;

namespace AeatherteX_API.Models;

public partial class Storage
{
    public int StorageId { get; set; }

    public string Type { get; set; } = null!;

    public int Capacity { get; set; }

    public int Speed { get; set; }

    public decimal BenchmarkScore { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
