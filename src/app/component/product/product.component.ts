import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public searchKey: string ='';
  public productList: any;
  public productFilter: any;
  constructor(private apiService: ApiService, private cartService: CartService ) { }

  ngOnInit(): void {
      this.apiService.getProducts().subscribe(res=>{
         this.productList = res;
         this.productFilter = res;
     
      this.productList.forEach((a:any) => {
        if(a.category =="men's clothing" || a.category =="women's clothing"){
           a.categorie='fashion';
        }
        Object.assign(a,{quantity:1, total:a.price});
      });
    });

     this.cartService.search.subscribe((a:any)=>{
       this.searchKey = a;
       console.log(this.searchKey);
     })
  }

 

  addPanier(product:any){
    this.cartService.addProduct(product);
    console.log(this.cartService.productList)
    
  }

  filterProduct(category: string){
    this.productFilter = this.productList.filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
      
    })
  }

}
