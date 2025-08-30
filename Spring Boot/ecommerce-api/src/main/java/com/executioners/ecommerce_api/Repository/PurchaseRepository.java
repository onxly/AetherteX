package com.executioners.ecommerce_api.Repository;

import com.executioners.ecommerce_api.Models.Purchase;
import com.executioners.ecommerce_api.Models.PurchaseId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase, PurchaseId> {
}