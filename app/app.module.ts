import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import {HeroFormComponent} from './hero-form.component';
import {ProductShopComponent} from './product-shop.component'
import {ProductService} from './product.service'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeroFormComponent,
        ProductShopComponent
    ],
    providers: [ ProductService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }