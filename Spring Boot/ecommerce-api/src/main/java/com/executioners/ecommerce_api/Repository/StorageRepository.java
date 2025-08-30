package com.executioners.ecommerce_api.Repository;

import com.executioners.ecommerce_api.Models.Storage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StorageRepository extends JpaRepository<Storage, Integer> {
}