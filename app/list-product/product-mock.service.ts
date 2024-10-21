import { Injectable }    from '@angular/core';

import { Product } from './product.model';
import ProductsMock from './product-mock.response';
import {Observable, Observer} from "rxjs";
import {ProductServiceInterface} from "./product.service.interface";
import { delay } from 'rxjs/operators';

@Injectable()
export class ProductMockService implements ProductServiceInterface{

    getProducts(): Observable<Product[]> {
        return new Observable((observer : Observer<Product[]>)=> {
                    observer.next(ProductsMock);
                    observer.complete();
        }).pipe(delay(2000));
    }

    getProduct(id : number): Observable<Product> {
        return new Observable((observer : Observer<Product> ) => {
            observer.next(ProductsMock.find((product: Product) => product.id === id));
            observer.complete();
        }).pipe(delay(1000));
    }
}
