import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserbooklistService } from 'src/app/services/user/userbooklist.service';
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

  constructor(private activatedRoute:ActivatedRoute,private services:UserbooklistService) { 

  }

  ngOnInit(): void {
    this.catId = this.activatedRoute.snapshot.paramMap.get('catId');

    this.services.getBookListByCat(this.catId).subscribe((data)=>{
      this.items=data
    }

    )

  }

  addtowishlist(){
    this.addedtowishlist = true;
  }
  removefromwishlist(){
    this.addedtowishlist = false;
  }

}
