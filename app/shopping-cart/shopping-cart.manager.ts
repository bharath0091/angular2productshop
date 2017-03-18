import {Product} from "../product.model";
import {CartProduct} from "./cart-product.model";

export class ShoppingCartManager{
    cartProducts : [CartProduct] = [];

    getCartProducts() : [CartProduct] {
        return this.cartProducts;
    }

    addOrUpdateProduct(product : Product, quantity : number) : void {
        let cartProduct : CartProduct = this.getCartProduct(product);
        if(cartProduct) {
            cartProduct.quantity = quantity;
        } else {
            this.cartProducts.push(new CartProduct(product, quantity));
        }
    }

    removeProduct(product : Product) {
        this.cartProducts = this.cartProducts.filter(cartProduct => !(cartProduct.product === product));
    }

    getProductQuantity(product : Product) {
        let cartProduct : CartProduct = this.getCartProduct(product);
        return cartProduct ? cartProduct.quantity : 0;
    }

    private getCartProduct(product : Product) {
        return this.cartProducts.find(cartProd => cartProd.product === product)
    }

    get price() : number {
        return this.cartProducts
            .map(cartProduct => cartProduct.price)
            .reduce((cum, cur) => cum + cur);
    }
}