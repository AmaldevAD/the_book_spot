import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }


  search(searchTerm:any,searchType:any):void{
    console.log(searchType)
    console.log(searchTerm)
    if(searchTerm){
    this.router.navigateByUrl('user/book/search/' + searchTerm+'/'+searchType);
    }
  }

}
