package com.executioners.ecommerce_api.Repository;

import com.executioners.ecommerce_api.Models.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {
    Client findByUsername(String username);
}
