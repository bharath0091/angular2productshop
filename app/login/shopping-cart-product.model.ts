import {Product} from "../product.model";

export class ShoppingCartProduct{
    constructor(public product : Product,
                public quantity : number) {}

    get price() : number {
        return this.product.rate * this.quantity;
    }
}