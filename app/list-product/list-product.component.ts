import {Component, OnInit, Inject} from '@angular/core';
import { Product }        from './product.model';
import {ProductServiceInterface} from "./product.service.interface";
import {PRODUCT_SERVICE_TOKEN} from "../common/constants";

@Component({
    moduleId: module.id,
    selector: 'product-shop',
    templateUrl: 'list-product.component.html',
    styleUrls: [ 'list-product.component.css' ]
})
export class ListProductComponent implements OnInit {
    products: Product[] = [];

    constructor(@Inject(PRODUCT_SERVICE_TOKEN) private productService: ProductServiceInterface) { }

    ngOnInit(): void {
        this.productService.getProducts()
            .subscribe((response : Product[]) => this.products = response);
    }

    onKey(searchValue : String) : void {
        console.log(searchValue);
    }
}
