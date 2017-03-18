import { Component, OnInit } from '@angular/core';
import { Product }        from './product.model';
import { ProductService } from './product.service';
import {CartProduct} from "./cart-product.model";
import {ShoppingCartManager} from "./shopping-cart.manager";

@Component({
    moduleId: module.id,
    selector: 'shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: [ './shopping-cart.component.css' ]
})
export class ShoppingCartComponent implements OnInit {
    cartProducts: CartProduct[] = [];
    totalPrice: CartProduct[] = [];

    constructor(private shoppingCartManager: ShoppingCartManager) { }

    ngOnInit(): void {
        this.cartProducts = this.shoppingCartManager.getCartProducts();
        //TODO Cart domain class can be created
        this.totalPrice = this.shoppingCartManager.price;
    }

    updateCart(product : Product, quantity : number) {
        console.log("quantity " + quantity);
        //TODO cant i avoid this plus
        this.shoppingCartManager.addOrUpdateProduct(product, +quantity)
    }
}
