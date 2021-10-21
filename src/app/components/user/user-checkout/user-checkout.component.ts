import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/user/cart.service';
import { Cart } from 'src/app/components/models/cart'
import { AdminCouponsService } from 'src/app/services/admin/admin-coupons.service';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.css']
})
export class UserCheckoutComponent implements OnInit {

  constructor(private cartServices: CartService, private couponService: AdminCouponsService) { }

  cartModel = new Cart();
  count: any;
  cart: any
  subTotal = 0;
  enteredCode: any
  coupons: any
  discount = 0;
  validCoupon: any;

  cartArray: Array<{
    bookId?: number,
    bookTitle?: string,
    bookQuantity?: number,
    bookPrice?: number,
    bookImage?: string
  }> = Array();


  ngOnInit(): void {
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




}
