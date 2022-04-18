import { Component, Injector, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {
  productList:any = "";


  constructor(private injector:Injector) {

    let services:any=this.injector.get(ApiService);
    services.viewProducts().subscribe((data:any)=>{
      this.productList=data;
    })
    
   }

  

  ngOnInit(): void {
  }

}
