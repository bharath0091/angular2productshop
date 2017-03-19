"use strict";
class ShoppingCart {
    constructor() {
        this.shoppingCartProducts = [];
    }
    get price() {
        return this.shoppingCartProducts
            .map(cartProduct => cartProduct.price)
            .reduce((cum, cur) => cum + cur, 0);
    }
}
exports.ShoppingCart = ShoppingCart;
//# sourceMappingURL=shopping-cart.model.js.map