import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {  }
  private readonly API_URL ='https://fakestoreapi.com/products';

  getProducts(){
    return this.http.get<any>(this.API_URL).pipe(
      map((res:any)=>{
         return res;
      })
    )
  }
}
