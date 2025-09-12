using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace AeatherteX_API.Models;

public partial class Database1Context : DbContext
{
    public Database1Context()
    {
    }

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

    public virtual DbSet<Shipping> Shippings { get; set; }

    public virtual DbSet<Storage> Storages { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<Wishlist> Wishlists { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;AttachDbFilename=C:\\Programing fun\\ASP.net\\AetherteX\\App_Data\\Database1.mdf;Database=Database1;Trusted_Connection=True;MultipleActiveResultSets=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Address>(entity =>
        {
            entity.HasKey(e => e.AddressId).HasName("PK__tmp_ms_x__091C2A1B3B4FB66E");

            entity.ToTable("Address");

            entity.HasIndex(e => e.AddressId, "UQ__tmp_ms_x__091C2A1A999F63F4").IsUnique();

            entity.Property(e => e.AddressId).HasColumnName("AddressID");
            entity.Property(e => e.City)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Line1).HasColumnType("text");
            entity.Property(e => e.Line2).HasColumnType("text");
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
                .HasConstraintName("FK__Cart__ProductID__76969D2E");

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
            entity.Property(e => e.IsPremium).HasColumnName("isPremium");
            entity.Property(e => e.Username).HasMaxLength(12);

            entity.HasOne(d => d.ClientNavigation).WithOne(p => p.Client)
                .HasForeignKey<Client>(d => d.ClientId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Client__ClientID__571DF1D5");
        });

        modelBuilder.Entity<Cpu>(entity =>
        {
            entity.HasKey(e => e.CpuId).HasName("PK__CPU__D70B1FFD946457AB");

            entity.ToTable("CPU");

            entity.HasIndex(e => e.CpuId, "UQ__CPU__D70B1FFC877A0B2B").IsUnique();

            entity.Property(e => e.CpuId).HasColumnName("CPU_ID");
            entity.Property(e => e.BenchmarkScore).HasColumnType("decimal(20, 2)");
            entity.Property(e => e.ClockSpeed).HasColumnType("decimal(4, 2)");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Gpu>(entity =>
        {
            entity.HasKey(e => e.GpuId).HasName("PK__GPU__E5353DF357C422A2");

            entity.ToTable("GPU");

            entity.HasIndex(e => e.GpuId, "UQ__GPU__E5353DF2649E5B0F").IsUnique();

            entity.Property(e => e.GpuId).HasColumnName("GPU_ID");
            entity.Property(e => e.BenchmarkScore).HasColumnType("decimal(20, 2)");
            entity.Property(e => e.CoreClock).HasColumnType("decimal(4, 2)");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Invoice>(entity =>
        {
            entity.HasKey(e => e.InvoiceId).HasName("PK__Invoice__D796AAD58EE94FB9");

            entity.ToTable("Invoice");

            entity.HasIndex(e => e.InvoiceId, "UQ__tmp_ms_x__D796AAD43E75657C").IsUnique();

            entity.Property(e => e.InvoiceId).HasColumnName("InvoiceID");
            entity.Property(e => e.AddressId).HasColumnName("AddressID");
            entity.Property(e => e.ClientId).HasColumnName("ClientID");
            entity.Property(e => e.Price).HasColumnType("decimal(10, 2)");

            entity.HasOne(d => d.Address).WithMany(p => p.Invoices)
                .HasForeignKey(d => d.AddressId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Invoice__Address__534D60F1");

            entity.HasOne(d => d.Client).WithMany(p => p.Invoices)
                .HasForeignKey(d => d.ClientId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Invoice__ClientI__4E88ABD4");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.ProductId).HasName("PK__tmp_ms_x__B40CC6ED44EFF45F");

            entity.ToTable("Product");

            entity.Property(e => e.ProductId)
                .ValueGeneratedNever()
                .HasColumnName("ProductID");
            entity.Property(e => e.Case)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CpuId).HasColumnName("CPU_ID");
            entity.Property(e => e.Description).HasColumnType("text");
            entity.Property(e => e.GpuId).HasColumnName("GPU_ID");
            entity.Property(e => e.Image)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Motherboard)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PowerSupply)
                .HasMaxLength(50)
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
                .HasConstraintName("FK__Product__CPU_ID__787EE5A0");

            entity.HasOne(d => d.Gpu).WithMany(p => p.Products)
                .HasForeignKey(d => d.GpuId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Product__GPU_ID__797309D9");

            entity.HasOne(d => d.Ram).WithMany(p => p.Products)
                .HasForeignKey(d => d.RamId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Product__RAM_ID__7A672E12");

            entity.HasOne(d => d.Storage).WithMany(p => p.Products)
                .HasForeignKey(d => d.StorageId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Product__Storage__7B5B524B");
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
                .HasConstraintName("FK__Purchase__Produc__778AC167");
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

        modelBuilder.Entity<Shipping>(entity =>
        {
            entity.HasKey(e => new { e.AddressId, e.ClientId }).HasName("PK__tmp_ms_x__577BCBBBDB2DDB4B");

            entity.ToTable("Shipping");

            entity.Property(e => e.AddressId)
                .ValueGeneratedOnAdd()
                .HasColumnName("AddressID");
            entity.Property(e => e.ClientId).HasColumnName("ClientID");
            entity.Property(e => e.Instructions).HasColumnType("text");

            entity.HasOne(d => d.Address).WithMany(p => p.Shippings)
                .HasForeignKey(d => d.AddressId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Shipping__Addres__52593CB8");

            entity.HasOne(d => d.Client).WithMany(p => p.Shippings)
                .HasForeignKey(d => d.ClientId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Shipping__Client__4AB81AF0");
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
                .HasConstraintName("FK__Wishlist__Produc__7C4F7684");

            entity.HasOne(d => d.User).WithMany(p => p.Wishlists)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Wishlist__UserId__72C60C4A");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
