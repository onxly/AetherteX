package com.executioners.ecommerce_api.Repository;

import com.executioners.ecommerce_api.Models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
}
