import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public quantity: number=0;
  public searchTerm: string =''
  constructor(private cartService: CartService) { }
   
  ngOnInit(): void {
    this.cartService.getProduct().subscribe((res:any)=>{
      this.quantity = res.length;
    })
  }
  
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm)
    this.cartService.search.next(this.searchTerm);
  }


}
