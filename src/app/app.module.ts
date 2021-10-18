import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminBodyComponent } from './components/admin/admin-body/admin-body.component';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { AdminBookComponent } from './components/admin/admin-book/admin-book.component';
import { AdminCouponComponent } from './components/admin/admin-coupon/admin-coupon.component';
import { LoginComponent } from './components/admin/login/login.component';
import { OrderlistComponent } from './components/admin/orderlist/orderlist.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { CategorySearchComponent } from './components/admin/search/category-search/category-search.component';
import { BookSearchComponent } from './components/admin/search/book-search/book-search.component';
import { UserCategoryComponent } from './components/user/user-category/user-category.component';
import { CartComponent } from './components/user/cart/cart.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserNavBarComponent } from './components/user/user-nav-bar/user-nav-bar.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AddressComponent } from './components/user/address/address.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminBodyComponent,
    CategoriesComponent,
    AdminBookComponent,
    AdminCouponComponent,
    AdminSidebarComponent,
    LoginComponent,
    OrderlistComponent,
    AdminUsersComponent,
    CategorySearchComponent,
    BookSearchComponent,
    UserCategoryComponent,
    CartComponent,
    UserHomeComponent,
    UserNavBarComponent,
    RegisterComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule,



    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
