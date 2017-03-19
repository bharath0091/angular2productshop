import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductShopComponent} from "./product-shop.component";
import {ProductDetailComponent} from "./product-detail.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'landing', component: ProductShopComponent },
    { path: 'product-detail/:id',     component: ProductDetailComponent },
    { path: 'shopping-cart',     component: ShoppingCartComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

