import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiModel} from 'src/app/model/api-models'
@Injectable({
  providedIn: 'root'
})
export class UserbooklistService {

  apiModel = new ApiModel()
  constructor(private http:HttpClient ) { }

  getBookListByCat(Id:any):Observable<any>{
    
    return this.http.get<any>(this.apiModel.localhost+"api/gtbokbycat/"+Id)
  }
  

}
