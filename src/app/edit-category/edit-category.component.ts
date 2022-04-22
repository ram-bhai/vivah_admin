import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  name :any = "";
  image:any = "";
  // id:any = "";
  // Category:any[] = [
  //   {_id: "625aa8d0d7d40b24a87428fb", name:"Men's"},
  //   {_id: "625aa923d7d40b24a87428fc", name:"Women's"}
  // ]
  constructor(private api:ApiService,private router:Router,private activated:ActivatedRoute) { }

  selectImage(event:any){
    if(event.target.files.length>0){ 
      this.image=event.target.files[0];
    }
  }
   
  public update() {
    //  alert(this.name+" "+this.image+" "+this.id);
    const formData= new FormData();
    formData.append('name',this.name);
    formData.append('image',this.image);
    // formData.append('cat_id',this.id);
    console.log(formData)
     this.api.updateCategory(formData).subscribe(result=>{
     if (result)
       alert('category updated...');

     else
       alert('Something went wrong');
     })
 }

 Cancel(){
  this.router.navigate(['./view-category'],{relativeTo:this.activated})
 }

  ngOnInit(): void {
  }

}
  