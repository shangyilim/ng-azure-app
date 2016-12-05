import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PhonePlc';
  searchString: string;
  cartItemCount = 0;

  constructor(private router: Router, private cartSvc: CartService) {

  }

  ngOnInit() {
    this.cartSvc.cart
      .subscribe(x => this.cartItemCount = x.items.length);
  }

  search(str) {
    const params = str ? { query: str } : {};
    this.searchString = '';
    this.router.navigate(['products', params]);
  }
}
