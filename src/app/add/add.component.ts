import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { NgForm } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private p:Product;
  private productlist;
  constructor(private productDataService:ProductdataService
    ){

   }

  ngOnInit() {
    this.productlist = this.productDataService.getAllProducts();
  }

  submitForm(form2: NgForm){
    console.log(form2.controls.ProductName.value);
     let l:number = this.productlist.length +1;
     this.p = { id: 'p'+l,
                name: form2.controls.ProductName.value,
                quantity: 0,
                unit:form2.controls.Unit.value       
              }; 
    // this.p.id='p13';
    // this.p.name=form2.controls.ProductName.value;
    // this.p.quantity=0;
    // this.p.unit=form2.controls.Unit.value;
    //console.log(this.p)
    //console.log(this.productlist.length);
    this.productDataService.addProduct(this.p)
    console.log(this.productlist[this.productlist.length-1])
  }

}
