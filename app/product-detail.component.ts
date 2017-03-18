import { Component, OnInit } from '@angular/core';
import { Product }        from './product';
import { ProductService } from './product.service';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: [ './product-detail.component.css' ]
})
export class ProductDetailComponent implements OnInit {
    product: Product;

    constructor(private productService: ProductService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        //TODO introduce delay
        let id = +this.route.snapshot.params['id'];
        console.log("id .........." + id);
        this.product = this.productService.getProduct(id);
    }

    onKey(searchValue : String) : void {
        console.log(searchValue);
    }
}
