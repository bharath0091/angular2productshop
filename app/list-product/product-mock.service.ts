import { Injectable }    from '@angular/core';

import { Product } from './product.model';
import ProductsMock from './product-mock.response';
import {Observable, Observer} from "rxjs";
import {ProductServiceInterface} from "./product.service.interface";

@Injectable()
export class ProductMockService implements ProductServiceInterface{

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
