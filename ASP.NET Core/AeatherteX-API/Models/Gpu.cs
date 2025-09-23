using System;
using System.Collections.Generic;

namespace AeatherteX_API.Models;

public partial class Gpu
{
    public int GpuId { get; set; }

    public string Name { get; set; } = null!;

    public int Vram { get; set; }

    public int CoreClock { get; set; }

    public decimal BenchmarkScore { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
