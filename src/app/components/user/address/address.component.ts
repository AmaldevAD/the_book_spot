import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
 
  constructor(private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigate(target:string){
    this.route.navigate([target],{replaceUrl:false});
  }



}
