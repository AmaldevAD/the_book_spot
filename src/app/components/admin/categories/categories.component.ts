import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CatModel } from 'src/app/model/admin/CatModel';
import { AdminGetcategoriesService } from 'src/app/services/admin/admin-getcategories.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


  url: any


  constructor(private activatedRoute: ActivatedRoute, private service:AdminGetcategoriesService) { this.url = "assets/images/categories/defeault-cat.png" }



  


  categories:any

  categoryModel = new CatModel();

  onButtonActivate(category: any) {
    category.IsChecked = true;
  }

  onButtonDeactivate(category: any) {
    category.IsChecked = false;

  }



  ngOnInit(): void {
   
    this.getCategories();
  }






  tempUrl:any
  imagePath: any;
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


  getCategories(){
    this.service.getCategoryList().subscribe((data)=>{
      this.categories=data;
    })
  }
  editBook(cat:any){
    this.categoryModel.catId=cat.categoryId;
    this.url="assets/images/categories/"+cat.image;
    this.categoryModel.catName=cat.categoryName
    this.categoryModel.catDescription=cat.description
    this.categoryModel.catImage=cat.image;
    this.categoryModel.catStatus=cat.status
    this.categoryModel.catPositon=cat.position;
  }

  saveCategories(){
    this.service.editCategories(this.categoryModel.catId,this.categoryModel).subscribe((data)=>{

    } )
    window.location.reload();
  }

  toggleStatus(cat:any){
    this.categoryModel.catId=cat.categoryId;
    this.url="assets/images/categories/"+cat.image;
    this.categoryModel.catName=cat.categoryName
    this.categoryModel.catDescription=cat.description
    this.categoryModel.catImage=cat.image;
    this.categoryModel.catStatus=!cat.status
    this.categoryModel.catPositon=cat.position;
    this.saveCategories()
  }

  deleteCategory(id:any){
    this.service.deleteCategories(id).subscribe((data)=>{
      console.log(data)
    });
    window.location.reload();
  }



}
