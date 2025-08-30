package com.executioners.ecommerce_api.Models;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
public class RAM {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ramId;

    private String name;
    private Integer capacity;
    private String type;
    private Integer speed;
    private BigDecimal benchmarkScore;

    public RAM() {
    }

    public RAM(String name, Integer capacity, String type, Integer speed, BigDecimal benchmarkScore) {
        this.name = name;
        this.capacity = capacity;
        this.type = type;
        this.speed = speed;
        this.benchmarkScore = benchmarkScore;
    }

    // Getters and setters
    public Integer getRamId() {
        return ramId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getSpeed() {
        return speed;
    }

    public void setSpeed(Integer speed) {
        this.speed = speed;
    }

    public BigDecimal getBenchmarkScore() {
        return benchmarkScore;
    }

    public void setBenchmarkScore(BigDecimal benchmarkScore) {
        this.benchmarkScore = benchmarkScore;
    }
}
