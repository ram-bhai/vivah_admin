import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApiService } from './api.service';
import { SigninComponent } from './signin/signin.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewProductsComponent } from './view-products/view-products.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
