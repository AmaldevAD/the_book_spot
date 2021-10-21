import { Component, OnInit } from '@angular/core';

import { AdminHomeServicesService } from 'src/app/services/admin/admin-home-services.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  userCount:any
  bookCount:any
  categoryCount:any;

  constructor( private services: AdminHomeServicesService) {
    this.bookCount=0;
    this.categoryCount=0;
   }

  ngOnInit(): void {
    this.getUserCount();
    this.getBookCount();
    this.getCategoryCount();

  }


  getUserCount(){
    this.services.getUserCount().subscribe((data)=>{
      this.userCount=data;
    })
  }

  getBookCount(){
    this.services.getBookCount().subscribe((data)=>{
      
      this.bookCount=data;
    })
  }

  getCategoryCount(){
    this.services.getCategoryCount().subscribe((data)=>{
      
      this.categoryCount=data;
    })
  }



}
