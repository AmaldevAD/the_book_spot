import { Component, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-admin-body',
  templateUrl: './admin-body.component.html',
  styleUrls: ['./admin-body.component.css']
})
export class AdminBodyComponent implements OnInit {
 
  url:any

  constructor() {
    this.url="assets/images/categories/defeault-cat.png"
   }

  ngOnInit(): void {
  }

  imagePath:any;
  onSelectFile(e: any) {
    if (e.target.files) {
      //this.url=e.target.files[0].name; 
      //console.log(e.target.value);
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      this.imagePath=e.target.files[0].name
      console.log(e.target.files[0].name);
     // this.bookModel.image=e.target.files[0].name;
      //console.log(e.target.files[0]);
      reader.onload = (event: any) => {

        this.url = event.target.result;
        //console.log(this.url);
      }
    }
  }


  

}
