import {Product} from "../list-product/product.model";
import {ShoppingCartProduct} from "./shopping-cart-product.model";
import {ShoppingCart} from "./shopping-cart.model";

export class ShoppingCartManager{

    private shoppingCart : ShoppingCart = new ShoppingCart();

    getShoppingCart() : ShoppingCart {
        return this.shoppingCart;
    }

    addOrUpdateProduct(product : Product, quantity : number) : void {
        let cartProduct : ShoppingCartProduct = this.getCartProduct(product);
        if(cartProduct) {
            cartProduct.quantity = quantity;
        } else {
            this.shoppingCart.shoppingCartProducts.push(new ShoppingCartProduct(product, quantity));
        }
    }

    removeProduct(product : Product) {
        this.shoppingCart.shoppingCartProducts = this.shoppingCart.shoppingCartProducts.filter(cartProduct => !(cartProduct.product === product));
    }

    getProductQuantity(product : Product) {
        let cartProduct : ShoppingCartProduct = this.getCartProduct(product);
        return cartProduct ? cartProduct.quantity : 0;
    }

    private getCartProduct(product : Product) {
        return this.shoppingCart.shoppingCartProducts.find(cartProd => cartProd.product === product)
    }
}