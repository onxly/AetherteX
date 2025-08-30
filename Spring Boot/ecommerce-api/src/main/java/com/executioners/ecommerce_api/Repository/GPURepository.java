package com.executioners.ecommerce_api.Repository;

import com.executioners.ecommerce_api.Models.GPU;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GPURepository extends JpaRepository<GPU, Integer> {
}