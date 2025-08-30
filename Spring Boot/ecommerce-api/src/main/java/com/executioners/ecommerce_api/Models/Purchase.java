package com.executioners.ecommerce_api.Models;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@IdClass(PurchaseId.class)
public class Purchase {

    @Id
    private Integer invoiceId;

    @Id
    private Integer productId;

    private Integer quantity;
    private BigDecimal price;

    @ManyToOne
    @JoinColumn(name = "invoice_id", insertable = false, updatable = false)
    private Invoice invoice;

    @ManyToOne
    @JoinColumn(name = "product_id", insertable = false, updatable = false)
    private Product product;

    public Purchase() {
    }

    public Purchase(Invoice invoice, Product product, Integer quantity, BigDecimal price) {
        this.invoice = invoice;
        this.product = product;
        this.invoiceId = invoice.getInvoiceId();
        this.productId = product.getProductId();
        this.quantity = quantity;
        this.price = price;
    }

    // Getters and setters
    public Integer getInvoiceId() {
        return invoiceId;
    }

    public Integer getProductId() {
        return productId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Invoice getInvoice() {
        return invoice;
    }

    public Product getProduct() {
        return product;
    }
}
