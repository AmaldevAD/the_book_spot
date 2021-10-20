
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  constructor(private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigate(target:string){
    this.route.navigate([target],{replaceUrl:true});
  }

  logout(){
    this.route.navigate(['/'],{replaceUrl:true});
  }

}
