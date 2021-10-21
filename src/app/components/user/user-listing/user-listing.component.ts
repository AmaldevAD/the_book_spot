import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserbooklistService } from 'src/app/services/user/userbooklist.service';
import { SearchService } from 'src/app/services/admin/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {
  image : any;
  items : any;
  catId:any
  addedtowishlist : boolean =false ;

  constructor(private activatedRoute:ActivatedRoute,private services:UserbooklistService,private servicessearch:SearchService,private router:Router) { 

  }

  ngOnInit(): void {

    this.services.getBookListByCat(0).subscribe((data)=>{
      this.items=data
    })

    this.activatedRoute.params.subscribe(params=>{
      if(params.searchItem)
      {
        this.servicessearch.getSearchItemUser(params.searchItem,params.searchType).subscribe((data)=>{
          this.items=data
        })
        
      }

    })

  }


  viewBook(bookId:any)
  {
    this.router.navigateByUrl('user/book-detail/'+bookId);
  }

  addtowishlist(){
    this.addedtowishlist = true;
    
  }
  removefromwishlist(){
    this.addedtowishlist = false;
  }
}
