import {PRODUCT_SERVICE_TOKEN} from "./common/constants";
import {ProductMockService} from "./list-product/product-mock.service";
import {ShoppingCartManager} from "./shopping-cart/shopping-cart.manager";

export const APP_DEPENDENCY_CONFIGURATION = [
    { provide: PRODUCT_SERVICE_TOKEN, useClass: ProductMockService },
    ShoppingCartManager
];
