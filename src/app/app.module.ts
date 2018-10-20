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

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    CartComponent
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
