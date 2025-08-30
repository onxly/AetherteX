package com.executioners.ecommerce_api.Repository;

import com.executioners.ecommerce_api.Models.CPU;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CPURepository extends JpaRepository<CPU, Integer> {
}