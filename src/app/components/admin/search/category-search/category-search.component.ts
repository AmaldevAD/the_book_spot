import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.css']
})
export class CategorySearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public searchTerm:String=""

  search():void{
    console.log(this.searchTerm)

    if(this.searchTerm)
    this.router.navigateByUrl('admin/categories/search/' + this.searchTerm);
  }

}
