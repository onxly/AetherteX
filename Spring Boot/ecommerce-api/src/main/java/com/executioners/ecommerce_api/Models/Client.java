package com.executioners.ecommerce_api.Models;

import jakarta.persistence.*;

@Entity
public class Client {

    @Id
    private Integer clientId;

    private String username; // stored as VARBINARY(12), mapping as String is simplest
    private Integer loyaltyPoints;
    private Boolean isPremium;

    @OneToOne
    @MapsId
    @JoinColumn(name = "clientId")
    private User user;

    public Client() {
    }

    public Client(User user, String username, Integer loyaltyPoints, Boolean isPremium) {
        this.user = user;
        this.clientId = user.getId();
        this.username = username;
        this.loyaltyPoints = loyaltyPoints;
        this.isPremium = isPremium;
    }

    // Getters and Setters
    public Integer getClientId() {
        return clientId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getLoyaltyPoints() {
        return loyaltyPoints;
    }

    public void setLoyaltyPoints(Integer loyaltyPoints) {
        this.loyaltyPoints = loyaltyPoints;
    }

    public Boolean getIsPremium() {
        return isPremium;
    }

    public void setIsPremium(Boolean isPremium) {
        this.isPremium = isPremium;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
