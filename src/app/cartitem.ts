import { Product } from './Product';
export interface cartItem {
  /*id: any;
  quantity: any;
  unit: any;*/
  product: Product; //id,name,quantity,unit
  vendor: string;
}
