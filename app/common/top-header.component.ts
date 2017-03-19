import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'top-header',
    template: `
        <div class="row">
            <div class="col-lg-4"><div class="well"><h3>Mobile shopping portal</h3></div></div>
            <div class="col-lg-4"><div class="well"><a [routerLink]="['/shopping-cart']" ><h4>Go to Cart</h4></a></div></div>
        </div>`,
    styles : [`
        .well {
            background-color: white;
            border: none;
        }`]
})
export class TopHeaderComponent {}
