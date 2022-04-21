import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  signin = "https://vivah-backend-api.herokuapp.com/admin/signIn";
  view = "https://vivah-backend-api.herokuapp.com/subcategory/subcategoryList";
  products = "https://vivah-backend-api.herokuapp.com/product/product-list";
  addCat = "https://vivah-backend-api.herokuapp.com/subcategory/add";
  addProduct = "http://vivah-backend-api.herokuapp.com/product/add-product";
  order = "https://vivah-backend-api.herokuapp.com/order/view-order";
  deleteCat = "https://vivah-backend-api.herokuapp.com/subcategory/deletecategory"
  customers = "https://vivah-backend-api.herokuapp.com/admin/user-list";
  constructor(private http:HttpClient) { }

  signIn(email:string,password:string):Observable<any>{
    return this.http.post<any>(this.signin,{email:email,password:password});
  }

  addCategory(fromdata:FormData):Observable<any>{
    return this.http.post<any>(this.addCat,fromdata);
  }

  viewCategory():Observable<any>{
    return this.http.get(this.view);
  }

  addProducts(fromdata:FormData):Observable<any>{
    return this.http.post<any>(this.addProduct,fromdata);
  }

  viewProducts():Observable<any>{
    return this.http.get(this.products);
  }

  viewCustomers():Observable<any>{
    return this.http.get(this.customers);
  }

  // deleteCategory(CID:any):Observable<any>{
  //   return this.http.post(this.deleteCat,{_id:CID});
  // }
  

  checkToken():boolean{
    return !!localStorage.getItem('jwt-token')
  }
}
