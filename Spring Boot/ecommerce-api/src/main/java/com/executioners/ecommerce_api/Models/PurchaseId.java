package com.executioners.ecommerce_api.Models;

import java.io.Serializable;
import java.util.Objects;

public class PurchaseId implements Serializable {
    private Integer invoiceId;
    private Integer productId;

    public PurchaseId() {
    }

    public PurchaseId(Integer invoiceId, Integer productId) {
        this.invoiceId = invoiceId;
        this.productId = productId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof PurchaseId))
            return false;
        PurchaseId that = (PurchaseId) o;
        return Objects.equals(invoiceId, that.invoiceId) &&
                Objects.equals(productId, that.productId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(invoiceId, productId);
    }
}
