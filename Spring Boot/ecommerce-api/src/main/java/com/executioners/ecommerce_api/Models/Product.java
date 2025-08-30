package com.executioners.ecommerce_api.Models;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
public class Product {

    @Id
    private Integer productId;

    private String title;
    private String image;
    private String description;
    private BigDecimal price;
    @Temporal(TemporalType.DATE)
    private Date date;
    private String motherboard;
    private String caseType;
    private String powerSupply;

    @ManyToOne
    @JoinColumn(name = "cpu_id")
    private CPU cpu;

    @ManyToOne
    @JoinColumn(name = "gpu_id")
    private GPU gpu;

    @ManyToOne
    @JoinColumn(name = "ram_id")
    private RAM ram;

    @ManyToOne
    @JoinColumn(name = "storage_id")
    private Storage storage;

    public Product() {
    }

    public Product(String title, String image, String description, BigDecimal price, Date date, String motherboard,
            String caseType, String powerSupply, CPU cpu, GPU gpu, RAM ram, Storage storage) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.price = price;
        this.date = date;
        this.motherboard = motherboard;
        this.caseType = caseType;
        this.powerSupply = powerSupply;
        this.cpu = cpu;
        this.gpu = gpu;
        this.ram = ram;
        this.storage = storage;
    }

    // Getters and setters
    public Integer getProductId() {
        return productId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public String getMotherboard() {
        return motherboard;
    }

    public void setMotherboard(String motherboard) {
        this.motherboard = motherboard;
    }

    public String getCaseType() {
        return caseType;
    }

    public void setCaseType(String caseType) {
        this.caseType = caseType;
    }

    public String getPowerSupply() {
        return powerSupply;
    }

    public void setPowerSupply(String powerSupply) {
        this.powerSupply = powerSupply;
    }

    public CPU getCpu() {
        return cpu;
    }

    public GPU getGpu() {
        return gpu;
    }

    public RAM getRam() {
        return ram;
    }

    public Storage getStorage() {
        return storage;
    }
}
