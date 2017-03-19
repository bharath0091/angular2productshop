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

//TODO check if return type is best practise
    ngOnInit(): void {
        //TODO introduce delay
        this.products = this.productService.getProducts();
    }

    onKey(searchValue : String) {
        console.log(searchValue);
    }
}
