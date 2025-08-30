package com.executioners.ecommerce_api.Models;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
public class CPU {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cpuId;

    private String name;
    private Integer cores;
    private Integer threads;
    private BigDecimal clockSpeed;
    private Integer cache;
    private BigDecimal benchmarkScore;

    public CPU() {
    }

    public CPU(String name, Integer cores, Integer threads, BigDecimal clockSpeed, Integer cache,
            BigDecimal benchmarkScore) {
        this.name = name;
        this.cores = cores;
        this.threads = threads;
        this.clockSpeed = clockSpeed;
        this.cache = cache;
        this.benchmarkScore = benchmarkScore;
    }

    // Getters and setters
    public Integer getCpuId() {
        return cpuId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCores() {
        return cores;
    }

    public void setCores(Integer cores) {
        this.cores = cores;
    }

    public Integer getThreads() {
        return threads;
    }

    public void setThreads(Integer threads) {
        this.threads = threads;
    }

    public BigDecimal getClockSpeed() {
        return clockSpeed;
    }

    public void setClockSpeed(BigDecimal clockSpeed) {
        this.clockSpeed = clockSpeed;
    }

    public Integer getCache() {
        return cache;
    }

    public void setCache(Integer cache) {
        this.cache = cache;
    }

    public BigDecimal getBenchmarkScore() {
        return benchmarkScore;
    }

    public void setBenchmarkScore(BigDecimal benchmarkScore) {
        this.benchmarkScore = benchmarkScore;
    }
}
