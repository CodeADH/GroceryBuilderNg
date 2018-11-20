import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';
import { ModifyComponent } from './modify/modify.component';
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { RemoveComponent } from './remove/remove.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'list', component: ProductlistComponent },
  { path: 'modify', component: ModifyComponent },
  { path: 'cart', component: CartComponent },
  { path: 'add', component: AddComponent },
  { path: 'remove', component: RemoveComponent },
  { path: '', redirectTo: '/main', pathMatch:'full'},
   //TO DO: add route guard
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}