import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  //@ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;


  constructor() { 
  }

  ngOnInit(): void {
  }
  // public scrollLeft(): void {
  //   this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  // }

  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any> = {} as ElementRef;

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
    
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }

}
