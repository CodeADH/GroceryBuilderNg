import { Component, OnInit } from '@angular/core';
import { cartItem } from '../cartitem'
import { CartdataService } from '../cartdata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartproduct: cartItem[] = [];
  constructor(private cartDataService: CartdataService) {

   }

  ngOnInit() {
    console.log("came here")
    this.cartproduct = this.cartDataService.getCart();
    //console.log('after service' + this.cartDataService.getCart());
  }

}
