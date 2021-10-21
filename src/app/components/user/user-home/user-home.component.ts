import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { UserHomeServicesService } from "src/app/services/user/user-home-services.service";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  categories:any
  books:any
 

  constructor( private service:UserHomeServicesService, private route:Router) { 
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('user'))
    this.getCategories();
    this.getBooks();
  }
  

  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any> = {} as ElementRef;
  @ViewChild('widgetsContentRated', { read: ElementRef }) public widgetsContentRated: ElementRef<any> = {} as ElementRef;

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
    
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }


  //Rated
  public scrollRightRated(): void {
    this.widgetsContentRated.nativeElement.scrollTo({ left: (this.widgetsContentRated.nativeElement.scrollLeft + 150), behavior: 'smooth' });
    
  }

  public scrollLeftRated(): void {
    this.widgetsContentRated.nativeElement.scrollTo({ left: (this.widgetsContentRated.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }



  getCategories(){
    this.service.getCategoriest().subscribe((data)=>{
      this.categories=data;
    })
  }

  getBooks(){
    this.service.getBooks().subscribe((data)=>{
      console.log(data)
      this.books=data
    })
  }
  bookDetailPage(id:any){
    this.route.navigate(['/user/book-detail',id],{replaceUrl:false});
  }


}
