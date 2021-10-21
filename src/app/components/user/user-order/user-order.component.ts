import { Component, OnInit } from '@angular/core';
import { UserOrdersService } from 'src/app/services/user/user-orders.service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {
  count:any
  orders:any

  constructor(private userOrderService:UserOrdersService) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.userOrderService.getOrders().subscribe((data)=>{
      this.orders=data;
      this.count = Object.keys(data).length;
    })
  }

}
