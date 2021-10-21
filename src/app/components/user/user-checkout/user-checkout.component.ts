import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/user/cart.service';
import { Cart } from 'src/app/components/models/cart'
import { AdminCouponsService } from 'src/app/services/admin/admin-coupons.service';
import { formatNumber } from '@angular/common';
import { UserCheckoutService } from 'src/app/services/user/user-checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.css']
})
export class UserCheckoutComponent implements OnInit {

  constructor(private cartServices: CartService, private couponService: AdminCouponsService, private checkOutService:UserCheckoutService,
    private route:Router) {
    this.bookNames=""
    this.bookIds=""
   }

  cartModel = new Cart();
  count: any;
  cart: any
  subTotal = 0;
  enteredCode: any
  coupons: any
  discount = 0;
  validCoupon: any;
  userData:any;
  userAddress:any;

  bookNames:string
  bookIds:string

  cartArray: Array<{
    bookId?: number,
    bookTitle?: string,
    bookQuantity?: number,
    bookPrice?: number,
    bookImage?: string
  }> = Array();


  ngOnInit(): void {
    this.getUserById();
    this.getCartItems()
    this.getCoupons();

  }


  getCartItems() {

    this.cartServices.getCartItemList(Number(localStorage.getItem('user'))).subscribe((data) => {

      this.cart = data;
      this.count = Object.keys(data).length;
      this.cartArray = this.cart
      console.log("Cart array")
      console.log(this.cartArray[0].bookPrice);
      this.calculateTotal();
    })
  }

  calculateTotal() {


    for (let i = 0; i < this.count; i++) {
      this.subTotal += Number(this.cartArray[i].bookQuantity) * Number(this.cartArray[i].bookPrice)
      this.bookNames=this.bookNames+this.cartArray[i].bookTitle +", "
      this.bookIds=this.bookIds+this.cartArray[i].bookId +", "
    }
  }

  flag = false;
  applyCoupon() {
    this.flag = false;
    console.log(this.enteredCode)
    for (let coup of this.coupons) {
      if (this.enteredCode == coup.name) {
        this.validCoupon = true;
        this.flag = true;
        this.discount = (this.subTotal * coup.percentage) / 100
      }
    }
    if (this.flag == false) {
      this.validCoupon = false;
      this.discount = 0;
    }
  }

  getCoupons() {
    this.couponService.getCoupons().subscribe((data) => {
      this.coupons = data;
    })

  }


  getUserById(){
    this.checkOutService.getUserById(localStorage.getItem('user')).subscribe((data)=>{
      this.userData=data;
      this.userAddress=data.address;
      
    })
  }

  reverseAddress(){
    this.userAddress=this.userData.address;
  }


  updateAddress(){
    this.checkOutService.updateAddress(localStorage.getItem('user'),this.userAddress).subscribe()
  }


  placeOrder(){
    console.log("called")
    this.checkOutService.plcaeOrder(this.bookIds,this.bookNames,this.subTotal,this.discount).subscribe()
    alert("Order Placed")
    setTimeout(()=>{  }, 4000)
    this.route.navigate(['/'],{replaceUrl:true})
  }

  navigate(){
    this.route.navigate(['/'],{replaceUrl:true})
  }


}
