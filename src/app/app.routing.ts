import { Routes } from '@angular/router';
import { PageProductsComponent } from './page-products';
import { PageProductComponent } from './page-product';
import { PageCartComponent } from './page-cart';

import { Page404Component } from './page-404';

export const appRoutes: Routes = [
  { path: 'products', component: PageProductsComponent },
  { path: 'products/:id', component: PageProductComponent },
  { path: 'cart', component: PageCartComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: Page404Component }
];
