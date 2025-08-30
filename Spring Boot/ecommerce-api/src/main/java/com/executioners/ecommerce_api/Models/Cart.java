package com.executioners.ecommerce_api.Models;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@IdClass(CartId.class)
public class Cart {

    @Id
    private Integer userId;

    @Id
    private Integer productId;

    private Integer quantity;
    private BigDecimal price;

    @ManyToOne
    @JoinColumn(name = "userId", insertable = false, updatable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "productId", insertable = false, updatable = false)
    private Product product;

    public Cart() {
    }

    public Cart(User user, Product product, Integer quantity, BigDecimal price) {
        this.user = user;
        this.product = product;
        this.userId = user.getId();
        this.productId = product.getProductId();
        this.quantity = quantity;
        this.price = price;
    }

    // Getters and setters
    public Integer getUserId() {
        return userId;
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

    public User getUser() {
        return user;
    }

    public Product getProduct() {
        return product;
    }
}
