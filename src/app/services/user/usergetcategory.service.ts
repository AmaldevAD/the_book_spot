import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiModel} from 'src/app/model/api-models'

@Injectable({
  providedIn: 'root'
})
export class UsergetcategoryService {

  apiModel = new ApiModel()
  constructor(private http:HttpClient ) { }

  getCategoryList():Observable<any>{
    
    return this.http.get<any>(this.apiModel.localhost+"api/categories")
  }

}
