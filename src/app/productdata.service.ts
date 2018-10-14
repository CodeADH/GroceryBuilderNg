import { Injectable } from '@angular/core';
import { Product } from  './product';

@Injectable()
export class ProductdataService {

  private productlist :Product[];

  constructor() { 
    this.productlist = [
      { id: 'p01', name: 'Wheat', quantity: 0 , unit: 'Kg'},
      { id: 'p02', name: 'Rice', quantity: 0 , unit: 'Kg'},
      { id: 'p03', name: 'Black Raisins', quantity: 0 , unit: 'Kg'},
      { id: 'p04', name: 'Oil', quantity: 0 , unit: 'Ltr'},
      { id: 'p05', name: 'Matki', quantity: 0 , unit: 'Kg'},
      { id: 'p06', name: 'Soya', quantity: 0 , unit: 'Kgs'},
      { id: 'p07', name: 'Garam Masala', quantity: 0 , unit: 'Nos'},
      { id: 'p08', name: 'Chawali', quantity: 0 , unit: 'Kg'},
      { id: 'p09', name: 'Hit', quantity: 0 , unit: 'Nos'},
      { id: 'p10', name: 'Khobre', quantity: 0 , unit: 'Nos'},
      { id: 'p11', name: 'Dane', quantity: 0 , unit: 'Kg'},
      { id: 'p12', name: 'Soap', quantity: 0 , unit: 'Nos'},
    ];

  }

  getAllProducts():Product[]{
    return this.productlist;

  }

}
