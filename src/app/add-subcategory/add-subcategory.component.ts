// import { HttpClient } from '@angular/common/http';
import { getLocaleId } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { Router } from 'express';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.scss']
})
export class AddSubcategoryComponent implements OnInit {
  name :any = "";
  image:any = "";
  id:any = "";
  Category:any[] = [
    {_id: "625aa8d0d7d40b24a87428fb", name:"Men's"},
    {_id: "625aa923d7d40b24a87428fc", name:"Women's"}
  ]
  constructor(private api:ApiService) { }

  selectImage(event:any){
    if(event.target.files.length>0){
      
      this.image=event.target.files[0];
    }
  }
   
  public add() {
   
    //  console.log(this.id);
     alert(this.name+" "+this.image+" "+this.id);
    const formData= new FormData();
    formData.append('name',this.name);
    formData.append('image',this.image);
    formData.append('cat_id',this.id);
    console.log(formData)
     this.api.addCategory(formData).subscribe(result=>{
     if (result)
       alert('category added...');

     else
       alert('Something went wrong');
     })
 }

  ngOnInit(): void {
  }

}
