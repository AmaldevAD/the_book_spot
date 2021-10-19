import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminBooklistService } from 'src/app/services/admin/admin-booklist.service';
import { AdminGetcategoriesService } from 'src/app/services/admin/admin-getcategories.service';
import{SearchService}from 'src/app/services/admin/search.service'
@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.css']
})
export class AdminBookComponent implements OnInit {
  Categories: any;
  books : any;
 public image_url = 'https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png';
 headers : any;
 rows:any

  constructor(private activatedRoute:ActivatedRoute,private servicesbook:AdminBooklistService,private servicescat:AdminGetcategoriesService,private servicessearch :SearchService) {
  }
  


  ngOnInit(): void {

    this.headers = ['ID','CategoryId', 'Image','Title','Author','Description','ISBN','Year','Price','Position','Status','Quantity','AddedAt']


    this.servicesbook.getBookList(0).subscribe((data)=>{
      this.rows=data
      console.log(data)
    })

    this.servicescat.getCategoryList().subscribe((data)=>{
    this.Categories=data
    })


  this.activatedRoute.params.subscribe(params=>{
      if(params.searchItem)
      {
        this.servicessearch.getSearchItem(params.searchItem).subscribe((data)=>{
          this.rows=data
        })
        
      }

    })

  }



  changedropdown(e:any)
  {
    console.log(e.target.value)
    this.servicesbook.getBookList(Number(e.target.value)).subscribe((data)=>{
      this.rows=data
      console.log(data)
    
  })


}

}

