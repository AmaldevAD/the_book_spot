import { Component, OnInit } from '@angular/core';
import { AdminCouponsService } from 'src/app/services/admin/admin-coupons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-coupon',
  templateUrl: './admin-coupon.component.html',
  styleUrls: ['./admin-coupon.component.css']
})
export class AdminCouponComponent implements OnInit {
  headers : any ;
  rows : any;
  coupons:any
  constructor( private service:AdminCouponsService , private route : ActivatedRoute) { 
   this.headers = ['CouponId','Name','Percentage %OFF','Status'];
  
  }

  ngOnInit(): void {
    this.service.getCoupons().subscribe((data)=>{
      this.coupons=data;
    })
  }
  DeleteCoupon(Id:any)
  { 
    console.log("hello")
    this.service.deleteCoupon(Id).subscribe((data)=>{
      console.log(data)
    });
    window.location.reload();
  }

}
