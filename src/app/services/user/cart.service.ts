import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiModel} from 'src/app/model/api-models'
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiModel = new ApiModel()
  constructor(private http:HttpClient ) { }

  getCartItemList(Id:any):Observable<any>{
    
    return this.http.get<any>(this.apiModel.localhost+"api/cart/"+Id)
  }

  deleteCartItem(userId:any,bookIdentity:number):Observable<any>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        userId: 1,
        bookId: bookIdentity,
      },
    }
    
   return  this.http.delete<any>(this.apiModel.localhost+"api/cart/"+userId,options)
  }

  updateQuantity(userId:number,data:any)
  {
    return this.http.put<any>(this.apiModel.localhost+"api/cart/"+userId,data)
  }

}
