import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services';
import { Cart } from '../shared/interfaces';

@Component({
    selector: 'page-cart',
    templateUrl: 'page-cart.component.html',
    styleUrls: ['page-cart.component.css']
})
export class PageCartComponent implements OnInit {
    cart: Cart;
    cartTotal: { amount: number, currency: string };

    constructor(private cartSvc: CartService) { }

    ngOnInit() {
        this.cart = this.cartSvc.cart.value;

        if (this.cart && this.cart.items && this.cart.items.length) {
            this.cartTotal = {
                amount: this.cart.items.map(x => x.unitPrice.amount).reduce((prev, curr) => {
                    return +prev + +curr;
                }, 0),
                currency: this.cart.items[0].unitPrice.currency
            }
        }
    }
}