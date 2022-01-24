import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartItemList: any=[];
  public nbreProduct: number = 0;
  public Total: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe((res:any)=>{
      this.cartItemList = res;
      console.log(this.cartItemList)
      this.nbreProduct = this.cartItemList.length;
    })
    this.Total=this.cartService.getTotalPrice();
  }

  videCart(){
    this.cartService.emptyCart();
  }

  remove(product:any){
    this.cartService.removeProduct(product);
  }

}
