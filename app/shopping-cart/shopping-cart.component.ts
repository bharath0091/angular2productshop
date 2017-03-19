import { Component, OnInit } from '@angular/core';
import { Product }        from '../list-product/product.model';
import { ProductService } from '../list-product/product.service';
import {ShoppingCartProduct} from "./shopping-cart-product.model";
import {ShoppingCartManager} from "./shopping-cart.manager";
import {ShoppingCart} from "./shopping-cart.model";

@Component({
    moduleId: module.id,
    selector: 'shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: [ './shopping-cart.component.css' ]
})
export class ShoppingCartComponent implements OnInit {
    shoppingCart : ShoppingCart;

    constructor(private shoppingCartManager: ShoppingCartManager) { }

    ngOnInit(): void {
        this.shoppingCart = this.shoppingCartManager.getShoppingCart()
    }

    updateCart(product : Product, quantity : number) {
        console.log("quantity " + quantity);
        //TODO cant i avoid this plus
        this.shoppingCartManager.addOrUpdateProduct(product, +quantity);
    }

    removeProduct(product : Product) {
        this.shoppingCartManager.removeProduct(product);
    }
}
