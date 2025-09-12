using System;
using System.Collections.Generic;

namespace AeatherteX_API.Models;

public partial class Cpu
{
    public int CpuId { get; set; }

    public string Name { get; set; } = null!;

    public int Cores { get; set; }

    public int Threads { get; set; }

    public decimal ClockSpeed { get; set; }

    public int Cache { get; set; }

    public decimal BenchmarkScore { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
