import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatModel } from 'src/app/model/admin/CatModel';
import { ApiModel } from 'src/app/model/api-models'
@Injectable({
  providedIn: 'root'
})
export class AdminGetcategoriesService {
  apiModel = new ApiModel()
  constructor(private http: HttpClient) { }


  getCategoryList(): Observable<any> {

    return this.http.get<any>(this.apiModel.localhost + "api/categories")
  }


  editCategories(id: any,cat: CatModel ) {
    return this.http.put<any>(this.apiModel.localhost + "api/categories/" + id, {
      "categoryName": cat.catName,
      "description": cat.catDescription,
      "image": cat.catImage,
      "status": cat.catStatus,
      "position": cat.catPositon
    })
  }

  deleteCategories(id:any){
    return this.http.delete<any>(this.apiModel.localhost+"api/categories/"+id)
  }

}
