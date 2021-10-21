import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiModel} from 'src/app/model/api-models'

@Injectable({
  providedIn: 'root'
})
export class AdminCouponsService {

  apiModel = new ApiModel()
  constructor(private http:HttpClient ) { }

  getCoupons():Observable<any>{
    
    return this.http.get<any>(this.apiModel.localhost+"api/Coupon")
  }

  deleteCoupon(Id:number):Observable<any>{
    
    return this.http.delete<any>(this.apiModel.localhost+"api/Coupon/"+Id)
  }

}
