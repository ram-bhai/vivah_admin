import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { OrdersComponent } from './orders/orders.component';
import { SigninComponent } from './signin/signin.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  {path:'signin',component:SigninComponent},
  {path:'add-category',component:AddSubcategoryComponent},
  {path:'view-category',component:ViewCategoryComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'view-product',component:ViewProductsComponent},
  {path:'orders',component:OrdersComponent},
  //{path:'',component:ViewProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
