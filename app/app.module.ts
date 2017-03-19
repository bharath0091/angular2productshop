import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import {ListProductComponent} from './list-product/list-product.component'
import {ProductService} from './list-product/product.service'
import {ProductFilterByName} from "./product-detail/product-filter-by-name.pipe";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {AppRoutingModule} from "./app-routing.module";
import {ShoppingCartManager} from "./shopping-cart/shopping-cart.manager";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {LoginComponent} from "./login/login.component";
import {LoginService} from "./login/login-service";
import {TopHeaderComponent} from "./common/top-header.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ListProductComponent,
        ProductFilterByName,
        ProductDetailComponent,
        ShoppingCartComponent,
        LoginComponent,
        TopHeaderComponent
    ],
    providers: [ ProductService, ShoppingCartManager, LoginService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }