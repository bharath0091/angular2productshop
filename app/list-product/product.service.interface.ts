import { Product } from './product.model';
import {Observable} from "rxjs";

export interface ProductServiceInterface {
    getProducts(): Observable<Product[]> ;
    getProduct(id : number): Observable<Product>;
}
