import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import {ListProductComponent} from './list-product/list-product.component'
import {ProductFilterByName} from "./product-detail/product-filter-by-name.pipe";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {AppRoutingModule} from "./app-routing.module";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {LoginComponent} from "./login/login.component";
import {TopHeaderComponent} from "./common/top-header.component";
import {APP_DEPENDENCY_CONFIGURATION} from "./app-dependecy.configuration";

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
    providers: APP_DEPENDENCY_CONFIGURATION,
    bootstrap: [ AppComponent ]
})
export class AppModule { }