import { Injectable }    from '@angular/core';

import { Product } from './product';
import ProductsMock from './products.mock';

@Injectable()
export class ProductService {

    //TODO remove mock code or atleast separate it
    getProducts(): Product[] {
        return ProductsMock;
    }
}
