import {Product} from "../list-product/product.model";

export class ShoppingCartProduct{
    constructor(public product : Product,
                public quantity : number) {}

    get price() : number {
        return this.product.rate * this.quantity;
    }
}