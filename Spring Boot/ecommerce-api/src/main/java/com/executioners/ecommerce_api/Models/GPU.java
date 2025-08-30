package com.executioners.ecommerce_api.Models;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
public class GPU {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer gpuId;

    private String name;
    private BigDecimal coreClock;
    private BigDecimal benchmarkScore;

    public GPU() {
    }

    public GPU(String name, BigDecimal coreClock, BigDecimal benchmarkScore) {
        this.name = name;
        this.coreClock = coreClock;
        this.benchmarkScore = benchmarkScore;
    }

    // Getters and setters
    public Integer getGpuId() {
        return gpuId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getCoreClock() {
        return coreClock;
    }

    public void setCoreClock(BigDecimal coreClock) {
        this.coreClock = coreClock;
    }

    public BigDecimal getBenchmarkScore() {
        return benchmarkScore;
    }

    public void setBenchmarkScore(BigDecimal benchmarkScore) {
        this.benchmarkScore = benchmarkScore;
    }
}
