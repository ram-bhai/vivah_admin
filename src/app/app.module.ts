import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApiService } from './api.service';
import { SigninComponent } from './signin/signin.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { CustomersComponent } from './customers/customers.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomepageComponent } from './homepage/homepage.component';
@NgModule({
  declarations: [
    AppComponent,
    AddSubcategoryComponent,
    AddProductComponent,
    OrdersComponent,
    PageNotFoundComponent,
    SigninComponent,
    ViewCategoryComponent,
    ViewProductsComponent,
    CustomersComponent,
    EditCategoryComponent,
    EditProductComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
