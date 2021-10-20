import { Component, OnInit } from '@angular/core';
import { AdminCouponsService } from 'src/app/services/admin/admin-coupons.service';

@Component({
  selector: 'app-admin-coupon',
  templateUrl: './admin-coupon.component.html',
  styleUrls: ['./admin-coupon.component.css']
})
export class AdminCouponComponent implements OnInit {
  headers : any ;
  rows : any;
  coupons:any
  constructor( private service:AdminCouponsService) { 
   this.headers = ['CouponId','Name','Percentage %OFF','Status'];
  
  }

  ngOnInit(): void {
    this.service.getCoupons().subscribe((data)=>{
      this.coupons=data;
    })
  }

}
