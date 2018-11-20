import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { Productlist } from '../models/productlist.model';
import { NgForm } from '@angular/forms';
import { cartItem } from '../cartitem';
import { Product } from '../product';
import { CartdataService } from '../cartdata.service';
import { tempVendor } from '../tempVendor';
import { viewClassName } from '@angular/compiler';
import { element } from 'protractor';
import * as $ from 'jquery'; 
import { DISABLED } from '@angular/forms/src/model';
import { style } from '@angular/core/src/animation/dsl';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  private vendordrop1;
  @ViewChild('addcart') cartbutton1;
  @ViewChild('viewcart') viewbutton1;
 // @ViewChild('count') vendordrop1;
  //const el = this.renderer.selectRootElement('.vendor-drop');
  //console.log(el);

  private productlist;
  vendors= ['Balaji','BigBasket','Other'];
  private cartproduct: cartItem[] = [];
  private dummyVendor:string ='Balaji';
  private tempVendorArr: tempVendor[] = [];

  constructor(private productDataService:ProductdataService,
              private cartDataService:CartdataService,
              private renderer: Renderer2,
              private elem: ElementRef) { 
  }

  //model = new Productlist();

  ngOnInit() {
    this.productlist = this.productDataService.getAllProducts();
    // console.log(this.productlist);
    
    
  }

  ngAfterViewInit(){
    //console.log(this.cartbutton1.nativeElement)
    this.cartbutton1.nativeElement.disabled=true;
    //console.log(this.vendordrop1.nativeElement)
    this.viewbutton1.nativeElement.disabled=true;
    // $(function() {
    //    $("#mainTable").tableHeadFixer(); 
    // });
   // jQuery('#mainTable',).tableHeadFixer();
    }

  submitForm(){
    /*console.log(this.cartproduct);
    console.log("in submit function")
    console.log("product 0 qty" + this.productlist[0].quantity);
    console.log("product 0 id" + this.productlist[0].id);*/
    
    let i=0;
    // this.cartproduct.push(this.productlist[0]);
    // console.log( "here before loop" + this.cartproduct);
    // console.log(this.vendors)
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
    this.viewbutton1.nativeElement.disabled=false;
    this.cartbutton1.nativeElement.disabled=true;
    this.viewbutton1.nativeElement.style.backgroundColor='magenta';
    this.cartbutton1.nativeElement.style.backgroundColor='white';
    //console.log( this.cartproduct);
    
    }
    

  add(id:string ){
    //console.log(id);
    //console.log(this.productlist.length);
    for(let i=0;i<this.productlist.length;i++){
      if(id === this.productlist[i].id)
        { 
         // if(this.productlist[i].unit == "Kg")
          this.productlist[i].quantity++;
          //console.log(this.vendordrop1.nativeElement);
          //this.vendordrop1.nativeElement.getElementById[i].disabled=false;
          let elements = this.elem.nativeElement.querySelectorAll('.vendor-drop');
          //elements.nativeElement.getElementById(i).disabled=false;
          //console.log(event.target);
          //console.log($(event))//.parent().find('.vendor-drop'))//.attr("disabled",true));
          //console.log($(event).parent().path.chidren(3));
          let target: object = $(event).find('.vendor-drop')
          //console.log(target);
          
          //$(".vendor-drop").next.css({color:'red'});
          //console.log(foo);

          //console.log(this..activeElement)
          //var images:object = 
          
          $(".vendor-drop").find("select").get()
          //prop('enabled');
          var tura  = $(".vendor-drop").get();
         let vendordrop1;
        
         //console.log(tura[i]);
          //var arr = images.
          //console.log(images);
          this.elem.nativeElement = tura[i];
          this.elem.nativeElement.disabled=false;
          this.elem.nativeElement.value='default';
          
          //console.log(arr[0]);
          

          //console.log(document.activeElement);
          //console.log(elements[i]);
          //console.log(this.cartbutton1.nativeElement);
          this.cartbutton1.nativeElement.disabled=false;
          //getElementsByClassName(vendor-drop).item(0);         
          //this.renderer.addClass(this.cartbutton1,"btn btn-primary"); 
          console.log(this.cartbutton1.nativeElement.style.backgroundColor)//='1px solid blue';
          this.cartbutton1.nativeElement.style.backgroundColor='green';
          console.log(this.cartbutton1.nativeElement.style.backgroundColor)
          $('cartbutton1').addClass('green');
          
        }
      
    }
    
  }

  del(id:string){
   // console.log(id);
    for(let i=0;i<this.productlist.length;i++){
      if(id === this.productlist[i].id)
        {
          if(this.productlist[i].quantity>0){
            this.productlist[i].quantity--; 
          }
          
          if(this.productlist[i].quantity==0){   
                    var tura = $(".vendor-drop").get();    
                  //  console.log(tura[i]);
                    this.elem.nativeElement = tura[i];
                    this.elem.nativeElement.disabled=true;
            }
          }
        }
          
    
  }

   selectedChanged(value:string, count:number) {
    //console.log("selectedChanged was called " + value + ' '+ count)
    //console.log(this.productlist[count].id);  
          let pid:string = this.productlist[count].id;  
          this.tempVendorArr.push({pid: pid,vendor: value });
     // console.log(this.tempVendorArr);
     
  }
}

