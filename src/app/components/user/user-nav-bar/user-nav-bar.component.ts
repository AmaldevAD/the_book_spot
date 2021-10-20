import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.css']
})
export class UserNavBarComponent implements OnInit {
  
  showLogin=true;

  constructor(private route:Router, private service:AuthService) { 
    if(localStorage.getItem('user'))
    this.showLogin=false;
    console.log("------------------------------------")
    console.log(localStorage.getItem('user'))
    console.log("------------------------------------")
  }

  ngOnInit(): void {
  }

  login(){
    this.route.navigate(['login'],{replaceUrl:false});
  }
  logOut(){
     


    this.showLogin=false;
    this.service.logOut();
     window.location.reload();
  }

}
