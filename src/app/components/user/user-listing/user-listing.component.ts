import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {
  image : any;
  items : any;
  addedtowishlist : boolean =false ;

  constructor() { 
    this.items = ['item1','item2','item3','item4','item5','item6','item7'];
  }

  ngOnInit(): void {
  }

  addtowishlist(){
    this.addedtowishlist = true;
  }
  removefromwishlist(){
    this.addedtowishlist = false;
  }
}
