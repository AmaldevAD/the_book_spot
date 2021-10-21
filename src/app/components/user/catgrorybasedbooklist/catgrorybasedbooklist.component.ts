import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserbooklistService } from 'src/app/services/user/userbooklist.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-catgrorybasedbooklist',
  templateUrl: './catgrorybasedbooklist.component.html',
  styleUrls: ['./catgrorybasedbooklist.component.css']
})
export class CatgrorybasedbooklistComponent implements OnInit {

  image : any;
  items : any;
  catId:any
  addedtowishlist : boolean =false ;

  constructor(private activatedRoute:ActivatedRoute,private services:UserbooklistService,private router :Router) { 

  }

  ngOnInit(): void {
    this.catId = this.activatedRoute.snapshot.paramMap.get('catId');

    this.services.getBookListByCat(this.catId).subscribe((data)=>{
      this.items=data
    }

    )

  }


  viewBook(bookId:any)
  {
    this.router.navigateByUrl('user/book-detail/'+bookId);
  }

  addtowishlist(){
    this.addedtowishlist = true;
  }
  removefromwishlist(){
    this.addedtowishlist = false;
  }

}
