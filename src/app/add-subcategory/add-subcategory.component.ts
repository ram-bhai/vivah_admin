import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.scss']
})
export class AddSubcategoryComponent implements OnInit {
  categoryName :any = "";
  categoryImage:any = "";
  constructor(private http:HttpClient,private api:ApiService) { }

  // selectImage(event:any){
  //   if(event.target.files.length>0){
  //     const file=event.target.files[0];
  //     this.categoryImage=file;

  //   }
  // }

  // public add() {
//     const formData= new FormData();
//     formData.append('categoryName',this.categoryName);
//     formData.append('categoryImage',this.categoryImage);
//      this.http.post<any>(addCat(),formData).subscribe(result=>{
//      if (result.error)
//        alert('Something went wrong');

//      else
//        alert('category added....');
//      })
//  }

//  this.api.addCat<any>(this.name,this.image).subscribe((result:any)=>{
//   if(result.error)
//   alert('Oops! you are unable to register with us🤦‍♂️')
//   else
//   alert('Thanks for registration')
 
// })

// }

  ngOnInit(): void {
  }

}
