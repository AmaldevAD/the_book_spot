import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  public index: any

  public cart = [{ bookId: 1, bookTitle: "Sapiens", bookQuantity: 2, price: 299, imageUrl: "https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg" }, { bookId: 2, bookTitle: "Atomic Habits", bookQuantity: 3, price: 199, imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg" },
  { bookId: 3, bookTitle: "The Monk who sold his ferrari", bookQuantity: 1, price: 599, imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61Iz2yy2CKL.jpg" },]
  ngOnInit(): void {
  }

  setCart() {
    //call service to initialise cart array
  }
  changeQuantity(cartItem: any, quantity: string) {
    console.log(quantity)
    this.index = this.cart.indexOf(cartItem)
    this.cart[this.index].bookQuantity = parseInt(quantity)
  }

  removeFromCart(cartItem: any) {
    this.index = this.cart.indexOf(cartItem)
    delete this.cart[this.index]

  }
}
