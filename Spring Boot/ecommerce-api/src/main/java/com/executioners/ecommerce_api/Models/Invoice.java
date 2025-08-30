package com.executioners.ecommerce_api.Models;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer invoiceId;

    private Integer quantity;
    private BigDecimal price;

    @Temporal(TemporalType.DATE)
    private Date date;

    @ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    public Invoice() {
    }

    public Invoice(Integer quantity, BigDecimal price, Date date, Address address, Client client) {
        this.quantity = quantity;
        this.price = price;
        this.date = date;
        this.address = address;
        this.client = client;
    }

    // Getters and setters
    public Integer getInvoiceId() {
        return invoiceId;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
