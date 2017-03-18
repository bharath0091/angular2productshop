import { Component, OnInit } from '@angular/core';
import { Product }        from './product.model';
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

//TODO check if return type is best practise
    ngOnInit(): void {
        //TODO introduce delay
        this.products = this.productService.getProducts();
    }

    onKey(searchValue : String) {
        console.log(searchValue);
    }
}
