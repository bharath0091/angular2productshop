import { Injectable }    from '@angular/core';

import { Product } from './product.model';
import ProductsMock from './products.mock';

@Injectable()
export class ProductService {

    private selectedProduct : Product;
    //TODO remove mock code or atleast separate it
    getProducts(): Product[] {
        return ProductsMock;
    }

    getProduct(id : number): Product {
        console.log("id " + id);
        console.log("ProductsMock.find" + ProductsMock.find((product: Product) => product.id === id));
        return ProductsMock.find((product: Product) => product.id === id);
    }
}
