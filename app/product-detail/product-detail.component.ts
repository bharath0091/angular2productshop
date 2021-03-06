import {Component, OnInit, Inject} from '@angular/core';
import { Product }        from '../list-product/product.model';
import {ActivatedRoute} from "@angular/router";
import {ShoppingCartManager} from "../shopping-cart/shopping-cart.manager";
import {PRODUCT_SERVICE_TOKEN} from "../common/constants";
import {ProductServiceInterface} from "../list-product/product.service.interface";

@Component({
    moduleId: module.id,
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html',
    styleUrls: [ 'product-detail.component.css' ]
})
export class ProductDetailComponent implements OnInit {
    product: Product;
    quantity : number = 1;

    constructor(@Inject(PRODUCT_SERVICE_TOKEN) private productService: ProductServiceInterface,
                private route: ActivatedRoute,
                private shoppingCartManager : ShoppingCartManager) { }

    ngOnInit(): void {
        this.productService.getProduct(+this.route.snapshot.params['id'])
            .subscribe((response : Product) => {
                this.product = response;
                this.quantity = this.shoppingCartManager.getProductQuantity(this.product) || 1;
        });
    }

    onKey(searchValue : String) : void {
        console.log(searchValue);
    }
    addToCart() : void {
        console.log("this.quantity...." + this.quantity);
        this.shoppingCartManager.addOrUpdateProduct(this.product, +this.quantity);
    }
}
