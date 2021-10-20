import { Component, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CouponModel } from 'src/app/model/admin/CouponModel';  
import { AdminHomeServicesService } from 'src/app/services/admin/admin-home-services.service';
import { CatModel } from 'src/app/model/admin/CatModel';
import { BookModel } from 'src/app/model/admin/BookModel';

@Component({
  selector: 'app-admin-body',
  templateUrl: './admin-body.component.html',
  styleUrls: ['./admin-body.component.css']
})
export class AdminBodyComponent implements OnInit {

  
 
  url:any
  tempUrl:any;
  couponModel = new CouponModel();
  catModel = new CatModel();
  bookModel = new BookModel();
  categories:any;




  constructor( private service: AdminHomeServicesService) {
    this.url="assets/images/categories/defeault-cat.png"
    this.tempUrl="assets/images/categories/defeault-cat.png";
   }

  ngOnInit( ): void {
    this.getCategories();
  }

  imagePath:any;
  onSelectFile(e: any) {
    if (e.target.files) {
      //this.url=e.target.files[0].name; 
      //console.log(e.target.value);
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      this.imagePath=e.target.files[0].name
      console.log(e.target.files[0].name);
      this.tempUrl=e.target.files[0].name;
      this.url="assets/images/categories/"+this.tempUrl;
      //console.log(e.target.files[0]);
      reader.onload = (event: any) => {
       
      }
    }
  }


  addCoupon(){
    this.couponModel.status=true;
    this.service.addCoupon(this.couponModel).subscribe((data)=>{
      
    })
  }


  addCategory(){
    this.catModel.catStatus=true;
    this.catModel.catImage=this.tempUrl;
    console.log(this.catModel);
    this.service.addCategories(this.catModel).subscribe((data)=>{})
  }

  getCategories(){

    this.service.getCategories().subscribe((data)=>{
      this.categories=data;
      console.log(this.categories[0])
    })
  }

  addBook(){
    this.bookModel.bookImage=this.tempUrl;
    this.bookModel.bookStatus=true;

    this.service.addBook(this.bookModel).subscribe((data)=>{})
    console.log(this.bookModel);
  }

  changeCat(event:any){
    this.bookModel.catId=event.target.value;
    console.log(event.target.value)
    
  }

}
