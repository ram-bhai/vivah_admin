import { Component, Injector, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orderList:any = "";
  constructor(private injector:Injector) {

    let services:any=this.injector.get(ApiService);
    services.viewOrdersList().subscribe((data:any)=>{
      this.orderList=data;
    })
   }


  ngOnInit(): void {
  }

}
