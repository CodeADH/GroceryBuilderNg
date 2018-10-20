import { Component, OnInit, Renderer2, AfterViewInit, ViewChild} from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { Productlist } from '../models/productlist.model';
import { NgForm } from '@angular/forms';
import { cartItem } from '../cartitem';
import { Product } from '../product';
import { CartdataService } from '../cartdata.service';
import { tempVendor } from '../tempVendor'
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  @ViewChild('addcart') cartbutton1;

  private productlist;
  vendors= ['Balaji','BigBasket','Other'];
  private cartproduct: cartItem[] = [];
  private dummyVendor:string ='Balaji';
  private tempVendorArr: tempVendor[] = [];

  constructor(private productDataService:ProductdataService,
              private cartDataService:CartdataService,
              private renderer: Renderer2) { 
  }

  //model = new Productlist();

  ngOnInit() {
    this.productlist = this.productDataService.getAllProducts();
    // console.log(this.productlist);
    
    // console.log(this.el.nativeElement.getElementById('cartbutton').disabled);//=true;
  }

  ngAfterViewInit(){
    console.log(this.cartbutton1.nativeElement)
    this.cartbutton1.nativeElement.disabled=true;
  }

  submitForm(){
    //console.log(this.cartproduct);
    console.log("in submit function")
    console.log("product 0 qty" + this.productlist[0].quantity);
    console.log("product 0 id" + this.productlist[0].id);
    let i=0;
    //this.cartproduct.push(this.productlist[0]);
    console.log( "here before loop" + this.cartproduct);
    console.log(this.vendors)
    let j=0;
    console.log(this.tempVendorArr.length);

   for(let i=0;i<this.productlist.length;i++){
          if(this.productlist[i].quantity > 0)
          { 
            
            for(j=this.tempVendorArr.length;j>0;j--)
            {
              console.log(this.tempVendorArr[j-1]);
              if(this.tempVendorArr[j-1].pid === this.productlist[i].id)
                {
                  this.cartDataService.pushCartItem({product: this.productlist[i], vendor:this.tempVendorArr[j-1].vendor}); 
                  break;
                } 
            }  

            
           // this.cartDataService.pushCartItem({product: this.productlist[i],vendor: this.dummyVendor});
            
          }
          
        }

    console.log("reached end of loop" );
    //console.log( this.cartproduct);
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
          console.log(this.cartbutton1.nativeElement)
          this.cartbutton1.nativeElement.disabled=false;
         // this.el.nativeElement.getElementById('cartbutton').disabled=false;
         // document.getElementById('cartbutton').disabled=false;

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

   selectedChanged(value:string, count:number) {
    console.log("selectedChanged was called " + value + ' '+ count)
    //console.log(this.productlist[count].id);  
      let pid:string = this.productlist[count].id;  
    //  console.log(this.tempVendorArr);
      this.tempVendorArr.push({pid: pid,vendor: value });
      console.log(this.tempVendorArr);
      /*console.log(this.cartproduct.length);
      for (let i=0;i<this.cartproduct.length;i++){

        if(this.cartproduct[i].product.id === pid){
          this.cartproduct[i].vendor= value;
          console.log(this.cartproduct[i].vendor);
        }
      }*/
      
      //console.log(this.cartDataService.getCart());
    //console.log(pid + ' '+ this.cartproduct[cartid].vendor);
      /*
      console.log (this.productlist[id].trial);
      let zol:any = this.productDataService.getAllProducts();
      console.log(zol);*/
      //console.log(this.cartDataService.getCart);
    
  }
}

