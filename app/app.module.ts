import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import {HeroFormComponent} from './hero-form.component';
import {ProductShopComponent} from './product-shop.component'
import {ProductService} from './product.service'
import {ProductFilterByName} from "./product-filter-by-name.pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeroFormComponent,
        ProductShopComponent,
        ProductFilterByName
    ],
    providers: [ ProductService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }