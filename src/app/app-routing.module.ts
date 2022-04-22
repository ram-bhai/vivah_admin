import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { CustomersComponent } from './customers/customers.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './signin/signin.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'signin',component:SigninComponent},
  {path:'add-category',component:AddSubcategoryComponent},
  {path:'view-category',component:ViewCategoryComponent},
  {path:'edit-category/:id',component:EditCategoryComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'view-product',component:ViewProductsComponent},
  {path:'edit-product/_id',component:EditProductComponent},
  {path:'customer-list',component:CustomersComponent},
  {path:'orders',component:OrdersComponent},
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
