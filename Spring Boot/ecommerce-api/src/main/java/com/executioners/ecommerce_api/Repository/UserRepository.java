package com.executioners.ecommerce_api.Repository;

import com.executioners.ecommerce_api.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    // Optional: custom query
    User findByEmail(String email);
}
