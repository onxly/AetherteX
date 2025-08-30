package com.executioners.ecommerce_api.Repository;

import com.executioners.ecommerce_api.Models.RAM;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RAMRepository extends JpaRepository<RAM, Integer> {
}
