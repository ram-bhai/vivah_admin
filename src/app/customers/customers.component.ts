import { Component, Injector, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
userList:any = "";
  constructor(private injector:Injector) { 

  let services:any=this.injector.get(ApiService);
    services.viewCustomers().subscribe((data:any)=>{
      this.userList=data;
    })
   }


  ngOnInit(): void {
  }

}
