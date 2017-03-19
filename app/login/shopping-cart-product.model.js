"use strict";
class ShoppingCartProduct {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    get price() {
        return this.product.rate * this.quantity;
    }
}
exports.ShoppingCartProduct = ShoppingCartProduct;
//# sourceMappingURL=shopping-cart-product.model.js.map