import { Component, OnInit } from '@angular/core';
import { Product }        from './product.model';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    selector: 'product-shop',
    templateUrl: 'list-product.component.html',
    styleUrls: [ 'list-product.component.css' ]
})
export class ListProductComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.productService.getProducts()
            .subscribe((response : Product[]) => this.products = response);
    }

    onKey(searchValue : String) : void {
        console.log(searchValue);
    }
}
