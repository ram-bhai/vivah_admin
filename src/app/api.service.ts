import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  signin = "https://vivah-backend.herokuapp.com/admin/signIn";
  view = "https://vivah-backend.herokuapp.com/subcategory/subcategoryList";
  products = "https://vivah-backend.herokuapp.com/product/product-list";
  addCat = "https://vivah-backend.herokuapp.com/subcategory/add";
  addProduct = "https://vivah-backend.herokuapp.com/product/add-product";
  order = "https://vivah-backend.herokuapp.com/order/view-order";
  constructor(private http:HttpClient) { }

  signIn(email:string,password:string):Observable<any>{
    return this.http.post<any>(this.signin,{email:email,password:password});
  }



  viewCategory():Observable<any>{
    return this.http.get(this.view);
  }

  viewProducts():Observable<any>{
    return this.http.get(this.products);
  }

  addCategory(name:string,image:string):Observable<any>{
    return this.http.post<any>(this.addCat,{name:name,image:image})
  }

  checkToken():boolean{
    return !!localStorage.getItem('jwt-token')
  }
}
