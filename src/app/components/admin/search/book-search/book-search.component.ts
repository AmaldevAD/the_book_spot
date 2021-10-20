import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  public searchTerm:String=""

  search():void{

    if(this.searchTerm)
    this.router.navigateByUrl('admin/book/search/' + this.searchTerm);
  }
}
