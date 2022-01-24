import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  
  public producList:any
  public product: any;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap;
    const productNumber = Number(productId.get('productID'));
    console.log(productNumber)
    this.api.getProducts().subscribe(res=>{
      this.product = res.find((a:any)=>a.id == productNumber);
    });

  }

  addPanier(product:any){
      this.cartService.addProduct(product);
  }

}
