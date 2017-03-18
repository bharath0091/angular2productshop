import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductShopComponent} from "./product-shop.component";
import {ProductDetailComponent} from "./product-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: ProductShopComponent },
    { path: 'product-detail/:id',     component: ProductDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

