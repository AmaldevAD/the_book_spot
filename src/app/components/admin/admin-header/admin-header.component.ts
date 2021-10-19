import { Component, OnInit } from '@angular/core';

import { AdminHomeServicesService } from 'src/app/services/admin/admin-home-services.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  userCount:any

  constructor( private services: AdminHomeServicesService) { }

  ngOnInit(): void {
    this.services.getUserCount().subscribe((data)=>{
      this.userCount=data;
    })
  }

}
