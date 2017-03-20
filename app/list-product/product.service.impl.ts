import { Injectable }    from '@angular/core';

import { Product } from './product.model';
import {Observable} from "rxjs";
import {ProductServiceInterface} from "./product.service.interface";

@Injectable()
export class ProductService implements ProductServiceInterface{

    getProducts(): Observable<Product[]> {
        throw Error("unimplemented method"); // implement when backend is ready and remove mock service.
    }

    getProduct(id : number): Observable<Product> {
        throw Error("unimplemented method"); // implement when backend is ready and remove mock service.
    }
}
