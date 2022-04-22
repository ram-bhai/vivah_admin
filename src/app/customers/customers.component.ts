import { Component, Injector, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

userList:any;

  constructor(private injector:Injector) {}


  ngOnInit(): void {
    let service = this.injector.get(ApiService);
    service.viewCustomers().subscribe(data=>{
      console.log(data);
      this.userList = data;
    })
  }

}
