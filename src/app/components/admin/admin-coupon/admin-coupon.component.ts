import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-coupon',
  templateUrl: './admin-coupon.component.html',
  styleUrls: ['./admin-coupon.component.css']
})
export class AdminCouponComponent implements OnInit {
  headers : any ;
  rows : any;
  constructor() { 
   this.headers = ['CouponId','Name','Percentage %OFF','Status'];
   this.rows = [{"CouponId":'1',"Name":'Flat50',"Percentage":'50',"Status":'1'},
   {"CouponId":'2',"Name":'40Bonanza',"Percentage":'40',"Status":'0'}]
  }

  ngOnInit(): void {
  }

}
