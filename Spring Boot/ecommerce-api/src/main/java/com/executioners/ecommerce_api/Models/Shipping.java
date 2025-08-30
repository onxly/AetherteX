package com.executioners.ecommerce_api.Models;

import jakarta.persistence.*;

@Entity
@IdClass(ShippingId.class)
public class Shipping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer addressId;

    @Id
    private Integer clientId;

    private String instructions;

    @ManyToOne
    @JoinColumn(name = "address_id", insertable = false, updatable = false)
    private Address address;

    @ManyToOne
    @JoinColumn(name = "client_id", insertable = false, updatable = false)
    private Client client;

    public Shipping() {
    }

    public Shipping(Address address, Client client, String instructions) {
        this.address = address;
        this.client = client;
        this.addressId = address.getAddressId();
        this.clientId = client.getClientId();
        this.instructions = instructions;
    }

    // Getters and setters
    public Integer getAddressId() {
        return addressId;
    }

    public Integer getClientId() {
        return clientId;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public Address getAddress() {
        return address;
    }

    public Client getClient() {
        return client;
    }
}
