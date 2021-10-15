import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  constructor() { }

  orders=[{orderId:101,userId:'LM30',bookId:'Messi',orderPlacedAt:'2021-10-15',delivered:false},
  {orderId:102,userId:'CR7',bookId:'Ronaldo',orderPlacedAt:'2021-10-11',delivered:false},
  {orderId:103,userId:'NJR10',bookId:'Neymar',orderPlacedAt:'2021-10-13',delivered:false}]

  ngOnInit(): void {
  }

  onButton(order:any)
{
  order.delivered=true;
  //this.orders[this.orders.indexOf(order)].delivered=true;

}

}
