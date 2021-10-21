import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart';
import { CartService } from 'src/app/services/user/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private services:CartService,private router:Router) {
   }
  public index: any

  cart:any
  count:any

  ngOnInit(): void {
    this.services.getCartItemList(Number(localStorage.getItem('user'))).subscribe((data)=>{
      console.log(data)
      this.cart=data
      this.count = Object.keys(data).length; 
    }
)}

 
  changeQuantity(cartItem: any, quantity: string) {


    this.services.updateQuantity(cartItem.userId,{bookId:cartItem.bookId,bookQuantity:Number(quantity)}).subscribe((data)=>{
      console.log(data)
    })
    this.services.getCartItemList(Number(localStorage.getItem('user'))).subscribe((data)=>{
      this.cart=data
    })

    this.router.navigateByUrl("/user/cart")
    .then(()=>{
      window.location.reload();
    });

  }

  removeFromCart(cartItem: any) {
    console.log("hai")

    this.services.deleteCartItem(cartItem.userId,cartItem.bookId).subscribe((data)=>{
      console.log(data)
    })
    
    window.location.reload();
}



}
