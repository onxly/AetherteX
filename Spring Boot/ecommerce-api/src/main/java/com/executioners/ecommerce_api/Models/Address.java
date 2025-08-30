package com.executioners.ecommerce_api.Models;

import jakarta.persistence.*;

@Entity
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer addressId;

    @Column(nullable = false)
    private String line1;
    @Column(nullable = false)
    private String line2;
    @Column(nullable = false, length = 50)
    private String city;
    @Column(nullable = false, length = 50)
    private String region;
    @Column(nullable = false, length = 50)
    private String postalCode;

    public Address() {
    }

    public Address(String line1, String line2, String city, String region, String postalCode) {
        this.line1 = line1;
        this.line2 = line2;
        this.city = city;
        this.region = region;
        this.postalCode = postalCode;
    }

    // Getters and setters
    public Integer getAddressId() {
        return addressId;
    }

    public String getLine1() {
        return line1;
    }

    public void setLine1(String line1) {
        this.line1 = line1;
    }

    public String getLine2() {
        return line2;
    }

    public void setLine2(String line2) {
        this.line2 = line2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }
}
