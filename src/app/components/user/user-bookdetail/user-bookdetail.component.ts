import { Component, OnInit } from '@angular/core';
import { UserbooklistService } from 'src/app/services/user/userbooklist.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/user/cart.service';
import { WishlistService } from 'src/app/services/user/wishlist.service';
@Component({
  selector: 'app-user-bookdetail',
  templateUrl: './user-bookdetail.component.html',
  styleUrls: ['./user-bookdetail.component.css']
})
export class UserBookdetailComponent implements OnInit {

  book:any
  bookId:any

  constructor(private booklistservice:UserbooklistService,private activatedRoute :ActivatedRoute,private cartservice :CartService,private wishlistservice:WishlistService) { }

  ngOnInit(): void {
    this.bookId=this.activatedRoute.snapshot.paramMap.get('bookId');

    this.booklistservice.getBookById(this.bookId).subscribe((data)=>{
      this.book=data
    })
  }

  addToCart(bookId:any)
  {
    this.cartservice.addToCart(Number(localStorage.getItem('user')),bookId).subscribe()
  }

  addToWishlist(bookId:any)
  {
    this.wishlistservice.addToWishlist(bookId,Number(localStorage.getItem('user'))).subscribe()
  }
}
