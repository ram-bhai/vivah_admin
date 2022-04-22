import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {
  categoryList:any = "";
  constructor(private injector:Injector, private api:ApiService , private router:Router,private activated:ActivatedRoute) {

    let services:any=this.injector.get(ApiService);
    services.viewCategory().subscribe((data:any)=>{
      this.categoryList=data;
    })  
    }
   
    
   editCategory(cid:any){
     this.router.navigate(['/edit-category',cid],{relativeTo:this.activated})
   }
   
    

   deleteCategory(cid:any,rowIndex:number){
     confirm('Are you sure');
      this.api.deleteCate(cid).subscribe(result=>{
       if(result){
         this.categoryList.slice(rowIndex,1)
            alert('Category deleted');
       }
        else
        alert('Something went wrong');
      })
    }

   

  ngOnInit(): void {
  }

}
