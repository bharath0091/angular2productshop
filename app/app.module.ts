import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Router } from '@angular/router';

import { AppComponent }  from './app.component';
import {HeroFormComponent} from './hero-form.component';
import {ProductShopComponent} from './product-shop.component'
import {ProductService} from './product.service'
import {ProductFilterByName} from "./product-filter-by-name.pipe";
import {ProductDetailComponent} from "./product-detail.component";
import {AppRoutingModule} from "./app-routing.module";
import {ShoppingCartManager} from "./shopping-cart/shopping-cart.manager";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {LoginComponent} from "./login/login.component";
import {LoginService} from "./login/login-service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroFormComponent,
        ProductShopComponent,
        ProductFilterByName,
        ProductDetailComponent,
        ShoppingCartComponent,
        LoginComponent
    ],
    providers: [ ProductService, ShoppingCartManager, LoginService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }