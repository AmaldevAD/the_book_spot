import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiModel} from 'src/app/model/api-models'
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  apiModel = new ApiModel()
  constructor(private http:HttpClient ) { }

  addToWishlist(bookIdval:any,userIdval:any)
  {
    return this.http.post<any>(this.apiModel.localhost+"api/Wishlist",{UserId:userIdval,BookId:bookIdval,WishlistId:""})

  }
  getWishlist(userId:any):Observable<any[]>
  {
    return this.http.get<any>(this.apiModel.localhost+"api/Wishlist/"+userId)

  }
  deleteWishlist(wishlistId:any)
  {
    return this.http.delete<any>(this.apiModel.localhost+"api/Wishlist/"+wishlistId)

  }

}
