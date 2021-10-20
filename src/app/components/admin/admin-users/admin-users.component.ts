import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AdminUserService } from 'src/app/services/admin/admin-user.service';


@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users:any
  messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


  constructor( private service:AdminUserService, private route:Router) { 
  }

  ngOnInit(): void {
   this.getUsers();
  }

  getUsers(){
    this.service.getUsers().subscribe((data)=>{
      this.users=data;
    })
  }

}
