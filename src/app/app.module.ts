import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import './rxjs-extensions';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';

// components
import { PageProductsComponent } from './page-products';
import { PageProductComponent } from './page-product';
import { PageCartComponent } from './page-cart';
import { Page404Component } from './page-404';

// services
import { ProductService, CartService } from './shared/services';

@NgModule({
  declarations: [
    AppComponent,
    PageProductsComponent,
    PageProductComponent,
    PageCartComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ProductService,
    CartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
