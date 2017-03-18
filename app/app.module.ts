import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
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

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroFormComponent,
        ProductShopComponent,
        ProductFilterByName,
        ProductDetailComponent,
        ShoppingCartComponent
    ],
    providers: [ ProductService, ShoppingCartManager ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }