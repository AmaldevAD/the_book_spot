import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiModel} from 'src/app/model/api-models'

@Injectable({
  providedIn: 'root'
})
export class UserCheckoutService {


  apiModel = new ApiModel()
  constructor(private http:HttpClient ) { }

  getUserById(id:any):Observable<any>{
    return this.http.get<any>(this.apiModel.localhost+"users/getUserById/"+id)
  }

  updateAddress(id:any,address:any){
    return this.http.put<any>(this.apiModel.localhost+"users/updateAddress/"+id,{
      "address":address
    })
  }

  plcaeOrder(bookIds:any,bookNames:any,subTotal:any,discount:any){
    return this.http.post<any>(this.apiModel.localhost+"api/orders/",{
      

        "userId": Number(localStorage.getItem('user')),

        "bookIds": bookIds,

        "bookNames": bookNames,

        "subTotal": Number(subTotal),

        "discount": Number(discount)

    
    })
  }

}
