package com.executioners.ecommerce_api.Repository;

import com.executioners.ecommerce_api.Models.Shipping;
import com.executioners.ecommerce_api.Models.ShippingId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShippingRepository extends JpaRepository<Shipping, ShippingId> {
}