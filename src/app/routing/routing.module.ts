import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../component/product/product.component';
import { DetailsProductComponent } from '../component/details-product/details-product.component';
import { CartComponent } from '../component/cart/cart.component';


const routes: Routes =[
  {path:'', component: ProductComponent},
  {path:'products', component: ProductComponent},
  {path:'products/:productID', component: DetailsProductComponent},
  {path:'cart', component:CartComponent}
]
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
