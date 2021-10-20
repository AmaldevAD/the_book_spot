import { Component, OnInit } from '@angular/core';
import { AdminOrdersService } from 'src/app/services/admin/admin-orders.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  constructor(private service:AdminOrdersService) { }

  orders:any
  showOrders=false;

  ngOnInit(): void {
    this.getOrders();
  }

  onButton(order: any) {
    order.delivered = true;
    //this.orders[this.orders.indexOf(order)].delivered=true;

  }

  getOrders(){
    this.service.getOrders().subscribe((data)=>{
      this.orders=data;
     

    })
  }

}
