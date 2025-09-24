using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace AeatherteX_API.Models;

public partial class Database1Context : DbContext
{
    public Database1Context(DbContextOptions<Database1Context> options)
        : base(options)
    {
    }

    public virtual DbSet<Address> Addresses { get; set; }

    public virtual DbSet<Admin> Admins { get; set; }

    public virtual DbSet<Cart> Carts { get; set; }

    public virtual DbSet<Client> Clients { get; set; }

    public virtual DbSet<Cpu> Cpus { get; set; }

    public virtual DbSet<Gpu> Gpus { get; set; }

    public virtual DbSet<Invoice> Invoices { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Purchase> Purchases { get; set; }

    public virtual DbSet<Ram> Rams { get; set; }

    public virtual DbSet<Rating> Ratings { get; set; }

    public virtual DbSet<Shipping> Shippings { get; set; }

    public virtual DbSet<Storage> Storages { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<Wishlist> Wishlists { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Address>(entity =>
        {
            entity.HasKey(e => e.AddressId).HasName("PK__tmp_ms_x__091C2A1B2357A23E");

            entity.ToTable("Address");

            entity.Property(e => e.AddressId).HasColumnName("AddressID");
            entity.Property(e => e.City)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Line1)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Line2)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.PostalCode)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Postal_Code");
            entity.Property(e => e.Region)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Admin>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__Admin__1788CC4C4651ED03");

            entity.ToTable("Admin");

            entity.Property(e => e.UserId).ValueGeneratedNever();
            entity.Property(e => e.AdminCode)
                .HasMaxLength(10)
                .IsUnicode(false);

            entity.HasOne(d => d.User).WithOne(p => p.Admin)
                .HasForeignKey<Admin>(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Admin__UserId__5629CD9C");
        });

        modelBuilder.Entity<Cart>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.ProductId }).HasName("PK__Cart__DCC800223A6F19E1");

            entity.ToTable("Cart");

            entity.Property(e => e.ProductId).HasColumnName("ProductID");
            entity.Property(e => e.Price).HasColumnType("decimal(10, 2)");

            entity.HasOne(d => d.Product).WithMany(p => p.Carts)
                .HasForeignKey(d => d.ProductId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Cart__ProductID__1C873BEC");

            entity.HasOne(d => d.User).WithMany(p => p.Carts)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Cart__UserId__6754599E");
        });

        modelBuilder.Entity<Client>(entity =>
        {
            entity.HasKey(e => e.ClientId).HasName("PK__tmp_ms_x__E67E1A046FCE1A45");

            entity.ToTable("Client");

            entity.Property(e => e.ClientId)
                .ValueGeneratedNever()
                .HasColumnName("ClientID");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.IsPremium).HasColumnName("isPremium");
            entity.Property(e => e.Username)
                .HasMaxLength(12)
                .IsUnicode(false);

            entity.HasOne(d => d.Address1Navigation).WithMany(p => p.ClientAddress1Navigations)
                .HasForeignKey(d => d.Address1)
                .HasConstraintName("FK__Client__Address1__41B8C09B");

            entity.HasOne(d => d.Address2Navigation).WithMany(p => p.ClientAddress2Navigations)
                .HasForeignKey(d => d.Address2)
                .HasConstraintName("FK__Client__Address2__42ACE4D4");

            entity.HasOne(d => d.ClientNavigation).WithOne(p => p.Client)
                .HasForeignKey<Client>(d => d.ClientId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Client__ClientID__571DF1D5");
        });

        modelBuilder.Entity<Cpu>(entity =>
        {
            entity.HasKey(e => e.CpuId).HasName("PK__tmp_ms_x__D70B1FFD212A5FBD");

            entity.ToTable("CPU");

            entity.HasIndex(e => e.CpuId, "UQ__tmp_ms_x__D70B1FFC53B67761").IsUnique();

            entity.Property(e => e.CpuId).HasColumnName("CPU_ID");
            entity.Property(e => e.BenchmarkScore).HasColumnType("decimal(20, 2)");
            entity.Property(e => e.Brand)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ClockSpeed).HasColumnType("decimal(4, 2)");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Gpu>(entity =>
        {
            entity.HasKey(e => e.GpuId).HasName("PK__tmp_ms_x__E5353DF34CB67665");

            entity.ToTable("GPU");

            entity.HasIndex(e => e.GpuId, "UQ__tmp_ms_x__E5353DF20C2210FA").IsUnique();

            entity.Property(e => e.GpuId).HasColumnName("GPU_ID");
            entity.Property(e => e.BenchmarkScore).HasColumnType("decimal(20, 2)");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Vram).HasColumnName("VRAM");
        });

        modelBuilder.Entity<Invoice>(entity =>
        {
            entity.HasKey(e => e.InvoiceId).HasName("PK__Invoice__D796AAD58EE94FB9");

            entity.ToTable("Invoice");

            entity.HasIndex(e => e.InvoiceId, "UQ__tmp_ms_x__D796AAD43E75657C").IsUnique();

            entity.Property(e => e.InvoiceId).HasColumnName("InvoiceID");
            entity.Property(e => e.AddressId).HasColumnName("AddressID");
            entity.Property(e => e.ClientId).HasColumnName("ClientID");
            entity.Property(e => e.Date)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Price).HasColumnType("decimal(10, 2)");

            entity.HasOne(d => d.Address).WithMany(p => p.Invoices)
                .HasForeignKey(d => d.AddressId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Invoice__Address__43A1090D");

            entity.HasOne(d => d.Client).WithMany(p => p.Invoices)
                .HasForeignKey(d => d.ClientId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Invoice__ClientI__4E88ABD4");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.ProductId).HasName("PK__tmp_ms_x__B40CC6ED96562119");

            entity.ToTable("Product");

            entity.Property(e => e.ProductId).HasColumnName("ProductID");
            entity.Property(e => e.Case)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.CpuId).HasColumnName("CPU_ID");
            entity.Property(e => e.Description).HasColumnType("text");
            entity.Property(e => e.GpuId).HasColumnName("GPU_ID");
            entity.Property(e => e.Image1)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Image2)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Image3)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Image4)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Motherboard)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.PowerSupply)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("Power_Supply");
            entity.Property(e => e.Price).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.RamId).HasColumnName("RAM_ID");
            entity.Property(e => e.StorageId).HasColumnName("Storage_ID");
            entity.Property(e => e.Title)
                .HasMaxLength(255)
                .IsUnicode(false);

            entity.HasOne(d => d.Cpu).WithMany(p => p.Products)
                .HasForeignKey(d => d.CpuId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Product__CPU_ID__2057CCD0");

            entity.HasOne(d => d.Gpu).WithMany(p => p.Products)
                .HasForeignKey(d => d.GpuId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Product__GPU_ID__1F63A897");

            entity.HasOne(d => d.Ram).WithMany(p => p.Products)
                .HasForeignKey(d => d.RamId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Product__RAM_ID__214BF109");

            entity.HasOne(d => d.Storage).WithMany(p => p.Products)
                .HasForeignKey(d => d.StorageId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Product__Storage__22401542");
        });

        modelBuilder.Entity<Purchase>(entity =>
        {
            entity.HasKey(e => new { e.InvoiceId, e.ProductId }).HasName("PK__Purchase__1CD666BB3CD7898D");

            entity.ToTable("Purchase");

            entity.Property(e => e.InvoiceId).HasColumnName("InvoiceID");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");
            entity.Property(e => e.Price).HasColumnType("decimal(10, 2)");

            entity.HasOne(d => d.Invoice).WithMany(p => p.Purchases)
                .HasForeignKey(d => d.InvoiceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Purchase__Invoic__6EF57B66");

            entity.HasOne(d => d.Product).WithMany(p => p.Purchases)
                .HasForeignKey(d => d.ProductId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Purchase__Produc__1D7B6025");
        });

        modelBuilder.Entity<Ram>(entity =>
        {
            entity.HasKey(e => e.RamId).HasName("PK__RAM__4C870AB65A9941E2");

            entity.ToTable("RAM");

            entity.HasIndex(e => e.RamId, "UQ__RAM__4C870AB7666CFA02").IsUnique();

            entity.Property(e => e.RamId).HasColumnName("RAM_ID");
            entity.Property(e => e.BenchmarkScore).HasColumnType("decimal(20, 2)");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Type)
                .HasMaxLength(5)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Rating>(entity =>
        {
            entity.HasKey(e => e.RatingId).HasName("PK__Rating__FCCDF85C702D9ABF");

            entity.ToTable("Rating");

            entity.Property(e => e.RatingId).HasColumnName("RatingID");
            entity.Property(e => e.DatePosted)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");
            entity.Property(e => e.Review)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.Product).WithMany(p => p.Ratings)
                .HasForeignKey(d => d.ProductId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Rating__ProductI__1B9317B3");

            entity.HasOne(d => d.User).WithMany(p => p.Ratings)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Rating__UserID__160F4887");
        });

        modelBuilder.Entity<Shipping>(entity =>
        {
            entity.HasKey(e => e.InvoiceId).HasName("PK__tmp_ms_x__D796AAD5F102BB27");

            entity.ToTable("Shipping");

            entity.Property(e => e.InvoiceId)
                .ValueGeneratedNever()
                .HasColumnName("InvoiceID");
            entity.Property(e => e.Instructions)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Status)
                .HasMaxLength(10)
                .IsUnicode(false);

            entity.HasOne(d => d.Invoice).WithOne(p => p.Shipping)
                .HasForeignKey<Shipping>(d => d.InvoiceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Shipping__Invoic__54CB950F");
        });

        modelBuilder.Entity<Storage>(entity =>
        {
            entity.HasKey(e => e.StorageId).HasName("PK__Storage__2AFDCC53C746FE40");

            entity.ToTable("Storage");

            entity.HasIndex(e => e.StorageId, "UQ__Storage__2AFDCC52C4CACA50").IsUnique();

            entity.Property(e => e.StorageId).HasColumnName("Storage_ID");
            entity.Property(e => e.BenchmarkScore).HasColumnType("decimal(20, 2)");
            entity.Property(e => e.Type)
                .HasMaxLength(4)
                .IsUnicode(false);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__tmp_ms_x__1788CC4CFB8E57E8");

            entity.ToTable("User");

            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(15)
                .IsUnicode(false);
            entity.Property(e => e.Surname)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.Type)
                .HasMaxLength(10)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Wishlist>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.ProductId }).HasName("PK__Wishlist__DCC80022ADDA767C");

            entity.ToTable("Wishlist");

            entity.Property(e => e.ProductId).HasColumnName("ProductID");
            entity.Property(e => e.Price).HasColumnType("decimal(10, 2)");

            entity.HasOne(d => d.Product).WithMany(p => p.Wishlists)
                .HasForeignKey(d => d.ProductId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Wishlist__Produc__1E6F845E");

            entity.HasOne(d => d.User).WithMany(p => p.Wishlists)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Wishlist__UserId__72C60C4A");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
