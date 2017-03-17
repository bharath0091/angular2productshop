import { Component, OnInit } from '@angular/core';
import { Product }        from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    selector: 'product-shop',
    templateUrl: './product-shop.component.html',
    styleUrls: [ './product-shop.component.css' ]
})
export class ProductShopComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        //TODO introduce delay
        this.products = this.productService.getProducts();
    }

    onKey(searchValue : String) {
        console.log(searchValue);
    }
}
