import { Component, Injector, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  name :any = "";
  images: string[] = [];
  price:any = "";
  stock:any = "";
  desc:any = "";
  subcat:any ="";
  subCategory:any = "";
  
  constructor(private inject:Injector, private api:ApiService) { 

  let services:any=this.inject.get(ApiService);
    services.viewCategory().subscribe((data:any)=>{
      this.subCategory=data;
    })
   }


  selectImage(event:any){
    for(let i=0;i<4;i++){
    if(event.target.files.length>0){
      const file:string[]=event.target.files[i];
      this.images=file;
    }
    }
  }

  public add() {
    const formData= new FormData();
    formData.append('name',this.name);
    for(let i=0;i<4;i++){
    formData.append('images[]',this.images[i]);}
    formData.append('price',this.price);
    formData.append('stock',this.stock);
    formData.append('desc',this.desc);
    formData.append('subcategory',this.subcat);
    console.log(formData)
     this.api.addProducts(formData).subscribe(result=>{
     if (result.err)
       alert('Something went wrong');

     else
       alert('category added....');
     })
 }

  ngOnInit(): void {
  }

}
