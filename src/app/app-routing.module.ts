import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'list', component: ProductlistComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/list', pathMatch:'full'},
  { path: '/', redirectTo: '/list', pathMatch:'full'},
  //TO DO: add route guard
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}