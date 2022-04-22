import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  signin = "http://localhost:3000/admin/signIn";
  view = "https://vivah-backend-api.herokuapp.com/subcategory/subcategoryList";
  products = "https://vivah-backend-api.herokuapp.com/product/product-list";
  addCat = "https://vivah-backend-api.herokuapp.com/subcategory/add";
  addProduct = "http://localhost:3000/product/add-product";
  order = "https://vivah-backend-api.herokuapp.com/order/view-order";
  editCate = "https://vivah-backend-api.herokuapp.com/subcategory/update-subcategory/:sid"
  deleteCat = "http://localhost:3000/subcategory/deletecategory/:id";
  customers = "https://vivah-backend-api.herokuapp.com/admin/user-list";
  viewOrders = "https://vivah-backend-api.herokuapp.com/order/view-order"
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

  updateCategory(fromdata:FormData):Observable<any>{
    return this.http.post<any>(this.editCate,fromdata);
  }

  deleteCate(CID:any):Observable<any>{
    return this.http.post(this.deleteCat,{_id:CID});
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


  viewOrdersList():Observable<any>{
    return this.http.get(this. viewOrders);
  }

  
  

  checkToken():boolean{
    return !!localStorage.getItem('jwt-token')
  }
}
