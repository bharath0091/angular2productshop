import { Injectable }    from '@angular/core';

import { Product } from './product.model';
import ProductsMock from './products.mock';
import {Observable, Observer} from "rxjs";

@Injectable()
export class ProductService {

    getProducts(): Observable<Product[]> {
        return  Observable.create((observer : Observer<Product[]>)=> {
                    observer.next(ProductsMock);
                    observer.complete();
        }).delay(new Date(Date.now() + 2000));
    }

    getProduct(id : number): Observable<Product> {
        return  Observable.create((observer : Observer<Product> ) => {
            observer.next(ProductsMock.find((product: Product) => product.id === id));
            observer.complete();
        }).delay(new Date(Date.now() + 1000));
    }
}
