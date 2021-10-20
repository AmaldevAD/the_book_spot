import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiModel} from 'src/app/model/api-models'
@Injectable({
  providedIn: 'root'
})
export class AdminBooklistService {


  // This is to get books by categories



  apiModel = new ApiModel()
  constructor(private http:HttpClient ) { }

  getBookList(Id:number):Observable<any>{
    
    return this.http.get<any>(this.apiModel.localhost+"api/book/"+Id)
  }

  deleteBook(Id:number):Observable<any>{
    
    return this.http.delete<any>(this.apiModel.localhost+"api/book/"+Id)
  }



}
