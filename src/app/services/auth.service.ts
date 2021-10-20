import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiModel } from '../model/api-models';
import { UserModel } from '../model/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

apiModel=new ApiModel()

  constructor(private http:HttpClient) { }

  login(data:any): Observable<any>{
    return this.http.post<any>(this.apiModel.localhost+"login",data)
    
  }

  isLoggedIn(){
    if(localStorage.getItem('user')){
      return true;
    }
    return false
  }
  logOut(){
    localStorage.removeItem('user')
  }

  register(user:UserModel){
    return this.http.post<any>(this.apiModel.localhost+"register",{
      
      "name": user.name,
      "email": user.email,
      "password": user.password2,
      "phone": user.phone,
      "address": user.address,
      "status": 1
    })
  }

}
