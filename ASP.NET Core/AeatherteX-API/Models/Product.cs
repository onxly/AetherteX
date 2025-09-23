using System;
using System.Collections.Generic;

namespace AeatherteX_API.Models;

public partial class Product
{
    public int ProductId { get; set; }

    public string Title { get; set; } = null!;

    public string Image1 { get; set; } = null!;

    public string? Image2 { get; set; }

    public string? Image3 { get; set; }

    public string? Image4 { get; set; }

    public string Description { get; set; } = null!;

    public decimal Price { get; set; }

    public string Motherboard { get; set; } = null!;

    public string Case { get; set; } = null!;

    public string PowerSupply { get; set; } = null!;

    public int CpuId { get; set; }

    public int GpuId { get; set; }

    public int RamId { get; set; }

    public int StorageId { get; set; }

    public int IsActive { get; set; }

    public int Stock { get; set; }

    public virtual ICollection<Cart> Carts { get; set; } = new List<Cart>();

    public virtual Cpu Cpu { get; set; } = null!;

    public virtual Gpu Gpu { get; set; } = null!;

    public virtual ICollection<Purchase> Purchases { get; set; } = new List<Purchase>();

    public virtual Ram Ram { get; set; } = null!;

    public virtual ICollection<Rating> Ratings { get; set; } = new List<Rating>();

    public virtual Storage Storage { get; set; } = null!;

    public virtual ICollection<Wishlist> Wishlists { get; set; } = new List<Wishlist>();
}
