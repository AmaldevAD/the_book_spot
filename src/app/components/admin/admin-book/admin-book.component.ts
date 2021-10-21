import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from 'src/app/model/admin/BookModel';
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

deleteBook(Id:number)
{
  this.servicesbook.deleteBook(Id).subscribe()
}



bookModel = new BookModel()

url:any
tempUrl:any;
imagePath:any;


onSelectFile(e: any) {
  if (e.target.files) {
    //this.url=e.target.files[0].name; 
    //console.log(e.target.value);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    this.imagePath=e.target.files[0].name
    console.log(e.target.files[0].name);
    this.bookModel.bookImage=e.target.files[0].name;
    this.url="assets/images/categories/"+this.bookModel.bookImage;
    //console.log(e.target.files[0]);
    reader.onload = (event: any) => {
     
    }
  }
}

changeCat(event:any){
  this.bookModel.catId=event.target.value;
  console.log(event.target.value)
  
}


addDefaultBookDetails(bok:any){
  this.url="assets/images/categories/"+bok.bookImage;
  this.getCatName(bok);
  this.bookModel.bookId=bok.bookId
  this.bookModel.catId=bok.catId;
  this.bookModel.bookTitle=bok.bookTitle;
  this.bookModel.bookAuthor=bok.bookAuthor;
  this.bookModel.bookDes=bok.bookDescription;
  this.bookModel.bookISBN=bok.bookIsbn;
  this.bookModel.bookYear=bok.bookYear;
  this.bookModel.bookPrice=bok.bookPrice;
  this.bookModel.bookPos=bok.bookPosition;
  this.bookModel.bookStatus=bok.bookStatus;
  this.bookModel.bookImage=bok.bookImage
  this.bookModel.bookQty=bok.bookQuantity;

}

getCatName(book:any){
  for(let cat of this.Categories){
    if(cat.categoryId==book.catId){
      this.bookModel.catName=cat.categoryName
    }
  }
}


saveBookEdit(){
  this.servicesbook.editBook(this.bookModel.bookId, this.bookModel).subscribe()
  window.location.reload();
}




}

