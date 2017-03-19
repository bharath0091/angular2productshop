import {ShoppingCartProduct} from "./shopping-cart-product.model";

export class ShoppingCart{
    shoppingCartProducts : ShoppingCartProduct[] = [];

    get price() : number {
        return this.shoppingCartProducts
            .map(cartProduct => cartProduct.price)
            .reduce((cum, cur) => cum + cur, 0);
    }
}