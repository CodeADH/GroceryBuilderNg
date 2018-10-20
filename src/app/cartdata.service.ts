import { Injectable } from '@angular/core';
import { Product } from  './product';
import { cartItem } from './cartitem';

@Injectable()
export class CartdataService {

  private cartproduct: cartItem[] = [];

  constructor() { 
  }

  pushCartItem(productList:cartItem)
  {
    this.cartproduct.push(productList);
  }

  getCart():cartItem[]{
    console.log('inside service');
    console.log(this.cartproduct);
    return this.cartproduct;

  }

}
