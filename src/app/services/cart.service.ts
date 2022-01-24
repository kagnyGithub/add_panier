import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public productItem: any =[];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  constructor() { }
  getProduct(){
    return this.productList.asObservable();
  }
  setProduct(product: any){
    this.productItem.push(...product);
    this.productList.next(product);
  }
  addProduct(product:any){
    this.productItem.push(product);
    this.productList.next(this.productItem);
    this.getTotalPrice();
  }
  getTotalPrice():number{
    let total:number = 0;
    this.productItem.map((a:any)=> {
      total += a.price;
    });
    return total;
  }

  removeProduct(product:any){
    this.productItem.map((a: any, index: number)=>{
      if(a.id == product.id){
        this.productItem.splice(index,1);
      }
    });
    this.productItem.next(this.productItem);
  }

  emptyCart(){
  this.productItem =[];
  this.productList.next(this.productItem);
  }
}
