import { Component, Injector, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {
  categoryList:any = "";
  constructor(private injector:Injector) {

    let services:any=this.injector.get(ApiService);
    services.viewCategory().subscribe((data:any)=>{
      this.categoryList=data;
    })
   }
    
   editCategory(){}

   deleteCategory(){}
    
  ngOnInit(): void {
  }

}
