package com.executioners.ecommerce_api.Models;

import java.io.Serializable;
import java.util.Objects;

public class CartId implements Serializable {
    private Integer userId;
    private Integer productId;

    public CartId() {
    }

    public CartId(Integer userId, Integer productId) {
        this.userId = userId;
        this.productId = productId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof CartId))
            return false;
        CartId cartId = (CartId) o;
        return Objects.equals(userId, cartId.userId) &&
                Objects.equals(productId, cartId.productId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, productId);
    }
}
