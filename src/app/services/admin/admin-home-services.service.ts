import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiModel} from 'src/app/model/api-models'
import { CouponModel } from 'src/app/model/admin/CouponModel'; 
import { CatModel } from 'src/app/model/admin/CatModel'; 
import { BookModel } from 'src/app/model/admin/BookModel';

@Injectable({
  providedIn: 'root'
})
export class AdminHomeServicesService {

  apiModel = new ApiModel()
  constructor(private http:HttpClient ) { }
   


  getUserCount():Observable<any>{
    
    return this.http.get<any>(this.apiModel.localhost+"users/getCount")
  }

  getBookCount():Observable<any>{
    
    return this.http.get<any>(this.apiModel.localhost+"api/book/count")
  }
  getCategoryCount():Observable<any>{
    
    return this.http.get<any>(this.apiModel.localhost+"api/categories/count")
  }

  addCoupon(couponModel:CouponModel):Observable<any>{
   return this.http.post<any>(this.apiModel.localhost+"api/Coupon",{
    "name": couponModel.name,
    "percentage": couponModel.percentage,
    "status": couponModel.status
    });
  }
   

  addCategories(catModel:CatModel):Observable<any>{
    return this.http.post<any>(this.apiModel.localhost+"api/categories",{
      "categoryName": catModel.catName,
      "description": catModel.catDescription,
      "image": catModel.catImage,
      "status": catModel.catStatus, 
      "position": catModel.catPositon,
  });
   }

  getCategories():Observable<any>{
    return this.http.get<any>(this.apiModel.localhost+"api/categories")
  }

  addBook(bookModel:BookModel):Observable<any>{
    return this.http.post<any>(this.apiModel.localhost+"api/book",{
      
        "catId": bookModel.catId,
        "bookTitle": bookModel.bookTitle,
        "bookAuthor": bookModel.bookAuthor,
        "bookDescription": bookModel.bookDes,
        "bookIsbn": bookModel.bookISBN,
        "bookYear": bookModel.bookYear,
        "bookPrice": bookModel.bookPrice,
        "bookPosition": bookModel.bookPos,
        "bookStatus": bookModel.bookStatus,
        "bookImage": bookModel.bookImage,
        "bookQuantity": bookModel.bookQty,
  });
   }

  
}
