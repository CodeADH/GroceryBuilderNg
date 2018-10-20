import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { Productlist } from '../models/productlist.model';
import { NgForm } from '@angular/forms';
import { cartItem } from '../cartitem';
import { Product } from '../product';
import { delay } from 'q';
import { CartdataService } from '../cartdata.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  private productlist;
  vendors= ['Balaji','BigBasket','Other'];
  private cartproduct: cartItem[] = [];
  private dummyVendor:string ='Balaji';

  constructor(private productDataService:ProductdataService,
              private cartDataService:CartdataService) { 
  }

  //model = new Productlist();

  ngOnInit() {
    this.productlist = this.productDataService.getAllProducts();
    console.log(this.productlist)
  }

  submitForm(){
    console.log(this.cartproduct);
    console.log("in submit function")
    console.log("product 0 qty" + this.productlist[0].quantity);
    console.log("product 0 id" + this.productlist[0].id);
    let i=0,j=0;
    //this.cartproduct.push(this.productlist[0]);
    console.log( "here before loop" + this.cartproduct);
    

   for(let i=0,j=0;i<this.productlist.length;i++){
          if(this.productlist[i].quantity > 0)
          { 
            //console.log("reached here" + i + j);
            //delay(3000);
            /*this.cartproduct[i].set(){
             this.vendors 
            }*/
            this.cartDataService.pushCartItem({product: this.productlist[i],vendor: this.dummyVendor});
               
            j++;
          }
          
        }

    console.log("reached end of loop" );
    console.log( this.cartproduct);
    //delay(10000);
    }
    

  add(id:string, unit:string){
    //console.log(id);
    //console.log(this.productlist.length);
    for(let i=0;i<this.productlist.length;i++){
      if(id === this.productlist[i].id)
        { 
         // if(this.productlist[i].unit == "Kg")
          this.productlist[i].quantity++;
          //document.getElementById("cartbutton").disabled=false;

        }
      
    }
    
  }

  del(id:string){
   // console.log(id);
    for(let i=0;i<this.productlist.length;i++){
      if(id === this.productlist[i].id)
        {
          if(this.productlist[i].quantity>0)
            this.productlist[i].quantity--; 
          /*elseif(this.productlist[i].quantity=0)      
              document.getElementById("cartbutton").disabled=true;*/
        }
    }

    
  }

}
