package com.executioners.ecommerce_api.Models;

import java.io.Serializable;
import java.util.Objects;

public class ShippingId implements Serializable {
    private Integer addressId;
    private Integer clientId;

    public ShippingId() {
    }

    public ShippingId(Integer addressId, Integer clientId) {
        this.addressId = addressId;
        this.clientId = clientId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof ShippingId))
            return false;
        ShippingId that = (ShippingId) o;
        return Objects.equals(addressId, that.addressId) &&
                Objects.equals(clientId, that.clientId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(addressId, clientId);
    }
}
