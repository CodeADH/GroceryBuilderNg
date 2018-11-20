import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';
import { ProductdataService } from './productdata.service';
import { bootstrap } from 'bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { CartdataService } from './cartdata.service';
import { MainComponent } from './main/main.component';
import { ModifyComponent } from './modify/modify.component';
import { AddComponent } from './add/add.component';
import { RemoveComponent } from './remove/remove.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    CartComponent,
    MainComponent,
    ModifyComponent,
    AddComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ProductdataService,
    CartdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
