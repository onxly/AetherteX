package com.executioners.ecommerce_api.Models;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
public class Storage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer storageId;

    private String type;
    private Integer capacity;
    private Integer speed;
    private BigDecimal benchmarkScore;

    public Storage() {
    }

    public Storage(String type, Integer capacity, Integer speed, BigDecimal benchmarkScore) {
        this.type = type;
        this.capacity = capacity;
        this.speed = speed;
        this.benchmarkScore = benchmarkScore;
    }

    // Getters and setters
    public Integer getStorageId() {
        return storageId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
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
