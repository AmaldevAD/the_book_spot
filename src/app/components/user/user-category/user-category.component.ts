import { Component, OnInit } from '@angular/core';
import { UsergetcategoryService } from 'src/app/services/user/usergetcategory.service';
@Component({
  selector: 'app-user-category',
  templateUrl: './user-category.component.html',
  styleUrls: ['./user-category.component.css']
})
export class UserCategoryComponent implements OnInit {

  constructor(private services:UsergetcategoryService ) {}
  categories:any
    /*public categories = [{ Name: 'Science Fiction', Image: 'https://snworksceo.imgix.net/asp/0f387215-8a51-4142-adb1-4d05c82a1fc2.sized-1000x1000.jpg?w=1000',
Description:'Fiction that typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration' ,IsChecked:true},
{Name:'Self Help',Image:'https://media.istockphoto.com/vectors/businessman-flying-out-of-the-book-vector-id1132192911?k=20&m=1132192911&s=612x612&w=0&h=jyXVfeyR_DLiHMIklRT6JxAPY8meO2ovKMjf0RMVoQ0=',
Description:'Books written with the intention to instruct its readers on solving personal problems',IsChecked:true}]*/

  ngOnInit(): void {
    this.services.getCategoryList().subscribe((data)=>{
      console.log(data)
      this.categories=data
    })
  }

}
