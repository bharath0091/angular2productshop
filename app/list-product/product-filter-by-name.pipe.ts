import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./product.model";

@Pipe({
    name: 'productFilterByName',
    pure: true
})
export class ProductFilterByName implements PipeTransform {
    transform(products: Product[], searchTerm: string): any[] {
        return products.filter(item => item.name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1);
    }
}