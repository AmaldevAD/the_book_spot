import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from 'src/app/model/admin/BookModel';
import {ApiModel} from 'src/app/model/api-models'
@Injectable({
  providedIn: 'root'
})
export class AdminBooklistService {


  // This is to get books by categories



  apiModel = new ApiModel()
  constructor(private http:HttpClient ) { }

  getBookList(Id:number):Observable<any>{
    
    return this.http.get<any>(this.apiModel.localhost+"api/gtbokbycat/"+Id)
  }

  deleteBook(Id:number):Observable<any>{
    
    return this.http.delete<any>(this.apiModel.localhost+"api/book/"+Id)
  }

  editBook(id:any,bookModel:BookModel){
    return this.http.put<any>(this.apiModel.localhost+"api/book/"+id,{

      "catId": bookModel.catId,
      "bookTitle": bookModel.bookTitle,
      "bookAuthor": bookModel.bookAuthor,                                   
      "bookDescription": bookModel.bookDes,
      
      "bookYear": bookModel.bookYear,
      "bookPrice": bookModel.bookPrice,
      "bookPosition": bookModel.bookPos,
      "bookStatus": bookModel.bookStatus,
      "bookImage": bookModel.bookImage,
      "bookQuantity": bookModel.bookQty,

    })
  }



}
