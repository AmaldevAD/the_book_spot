import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiModel} from 'src/app/model/api-models'
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiModel = new ApiModel()
  constructor(private http:HttpClient ) { }
  getSearchItem(searchItemval:any):Observable<any>{

    return this.http.post<any>(this.apiModel.localhost+"api/book/search",{searchItem:searchItemval,searchType:"All"})
  }
  getSearchItemUser(searchItemval:any,searchTypeval:any):Observable<any>{

    return this.http.post<any>(this.apiModel.localhost+"api/book/search",{searchItem:searchItemval,searchType:searchTypeval})
  }


}
