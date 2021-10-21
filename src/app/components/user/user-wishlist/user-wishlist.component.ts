import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/user/wishlist.service';
import { CartService } from 'src/app/services/user/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-wishlist',
  templateUrl: './user-wishlist.component.html',
  styleUrls: ['./user-wishlist.component.css']
})
export class UserWishlistComponent implements OnInit {

  constructor(private wishlistservice:WishlistService,private cartservice:CartService,private router:Router) { }

  wishlists:any
  count:any

  ngOnInit(): void {
    console.log("out")
    this.wishlistservice.getWishlist(Number(localStorage.getItem('user'))).subscribe((data)=>{
      console.log("in")
      this.count = Object.keys(data).length;
      this.wishlists=data
    })
  }


  addToCart(bookId:any)
  {
    this.cartservice.addToCart(Number(localStorage.getItem('user')),bookId).subscribe()
  }
  
  deleteFromWishlist(wishlistId:any)
  {
    console.log(wishlistId)
    this.wishlistservice.deleteWishlist(wishlistId).subscribe()
    
    this.router.navigateByUrl("/user/wishlist")
    .then(()=>{
      window.location.reload();
    });
  }

}
