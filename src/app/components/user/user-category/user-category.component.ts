import { Component, OnInit } from '@angular/core';
import { UsergetcategoryService } from 'src/app/services/user/usergetcategory.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-category',
  templateUrl: './user-category.component.html',
  styleUrls: ['./user-category.component.css']
})
export class UserCategoryComponent implements OnInit {

  constructor(private services:UsergetcategoryService ,private router:Router) {}
  categories:any

  ngOnInit(): void {
    this.services.getCategoryList().subscribe((data)=>{
      this.categories=data
    })
  }
  onCatClick(catId:any)
  {
    this.router.navigate(['/user/catbasedbooklist',catId ],{replaceUrl:false})

  }

}
