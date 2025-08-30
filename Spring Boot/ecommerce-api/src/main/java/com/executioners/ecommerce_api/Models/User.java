package com.executioners.ecommerce_api.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

    // Primary Key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer UserId;

    // Attributes
    private String Name;
    private String Surname;
    private String Email;
    private String PhoneNumber;
    private String Password;

    // Constructors
    public User() {
    }

    public User(String Name, String Surname, String Email, String PhoneNumber, String Password) {
        this.Name = Name;
        this.Surname = Surname;
        this.Email = Email;
        this.PhoneNumber = PhoneNumber;
        this.Password = Password;
    }

    // Getters and Setters
    public Integer getId() {
        return UserId;
    }

    public void setId(Integer id) {
        this.UserId = id;
    }

    public String getFullName() {
        return Name + " " + Surname;
    }

    public String getName() {
        return this.Name;
    }

    public String getSurname() {
        return this.Surname;
    }

    public void setName(String name) {
        this.Name = name;
    }

    public void setSurname(String surname) {
        this.Surname = surname;
    }

    public void setEmail(String email) {
        this.Email = email;
    }

    public String getEmail() {
        return this.Email;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.PhoneNumber = phoneNumber;
    }

    public String getPhoneNumber() {
        return PhoneNumber;
    }

    public void setPassword(String password) {
        this.Password = password;
    }

    public String getPassword() {
        return Password;
    }
}
