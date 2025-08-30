package com.executioners.ecommerce_api.Models;

import jakarta.persistence.*;

@Entity
public class Admin {

    @Id
    private Integer userId;

    private String adminCode;

    @OneToOne
    @MapsId
    @JoinColumn(name = "userId")
    private User user;

    public Admin() {
    }

    public Admin(User user, String adminCode) {
        this.user = user;
        this.userId = user.getId();
        this.adminCode = adminCode;
    }

    public Integer getUserId() {
        return userId;
    }

    public String getAdminCode() {
        return adminCode;
    }

    public void setAdminCode(String adminCode) {
        this.adminCode = adminCode;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
