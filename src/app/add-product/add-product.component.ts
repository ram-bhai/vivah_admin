import { Component, Injector, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  name :any = "";
  images:any=[{}];
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
 
    first:any;
    second:any;
    third:any;
    fourth:any;
    fivth:any;

  selectImage(event:any){
    if(event.target.files.length>=0){
      console.log(event.target.files);

      this.images = event.target.files
      console.log(this.images[0].name)
    
        this.first = this.images[0]
        this.second = this.images[1]
        this.third = this.images[2]
        this.fourth = this.images[3]
      
    }
  }

  public add() {
    const formData= new FormData();
    formData.append('productName',this.name);
    formData.append('first',this.first);
    formData.append('second',this.second);
    formData.append('third',this.third);
    formData.append('fourth',this.fourth);
    
    formData.append('productPrice',this.price);
    formData.append('productQty',this.stock);
    formData.append('productDescription',this.desc);
    formData.append('categoryId',this.subcat);
    console.log(formData)
     this.api.addProducts(formData).subscribe(result=>{
     if (result)
       alert('Something went wrong');

     else
       alert('category added....');
     })
 }

  ngOnInit(): void {
  }

}
