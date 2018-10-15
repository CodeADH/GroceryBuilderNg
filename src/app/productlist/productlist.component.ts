import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { Productlist } from '../models/productlist.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  private productlist;
  constructor(private productDataService:ProductdataService) { }
  vendors= ['Balaji','BigBasket','Other'];
  //model= new Productlist('Balaji');

  ngOnInit() {
    this.productlist = this.productDataService.getAllProducts();
    console.log(this.productlist)
  }

  add(id:string, unit:string){
    //console.log(id);
    //console.log(this.productlist.length);
    for(let i=0;i<this.productlist.length;i++){
      if(id === this.productlist[i].id)
        { 
         // if(this.productlist[i].unit == "Kg")
          this.productlist[i].quantity++;
          document.getElementById("cartbutton").disabled=false;

        }
      
    }
    
  }

  del(id:string){
    console.log(id);
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
