import { Component, OnInit } from '@angular/core';

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
 rows : any;

  constructor() {
    this.Categories = ['category1', 'category2', 'category3'];
    this.books = ['sub1','sub2','sub3','sub4','sub5', 'sub6' , 'sub7'];
    this.headers = ['ID','CategoryId', 'Image','Title','Author','Description','ISBN','Year','Price','Position','Status','Quantity','AddedAt']
    this.rows = [{"ID":"1","CategoryId":"1" ,"Image": this.image_url,"Title":"IF tommorow","Author":"sidney","Description":"Wathc th==is thriler by sdney shedlon","ISBN":"12312","Year":"2010", "Price":"200","Position":"1", "Status": "1","Quantity": "12", "AddedAt": "12-08-21"},
    {"ID":"2","CategoryId":"2" ,"Image": this.image_url,"Title":"Angels and demons","Author":"Dan Brown","Description":"Wathc th==is thriler by Dan brown, who went over the ds to create this work of magic","ISBN":"123232112","Year":"2011", "Price":"2020","Position":"2", "Status": "0","Quantity": "21", "AddedAt": "12-08-11"}]
   }

  ngOnInit(): void {
  }

}
