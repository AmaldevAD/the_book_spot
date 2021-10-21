import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


import { AdminComponent } from './components/admin/admin.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { AdminBookComponent } from './components/admin/admin-book/admin-book.component';
import { AdminCouponComponent } from './components/admin/admin-coupon/admin-coupon.component';
import { LoginComponent } from './components/admin/login/login.component';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { OrderlistComponent } from './components/admin/orderlist/orderlist.component';
import { UserCategoryComponent } from './components/user/user-category/user-category.component';
import { CartComponent } from './components/user/cart/cart.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AddressComponent } from './components/user/address/address.component';
import { UserWishlistComponent } from './components/user/user-wishlist/user-wishlist.component';
import { UserCheckoutComponent } from './components/user/user-checkout/user-checkout.component';
import { UserBookdetailComponent } from './components/user/user-bookdetail/user-bookdetail.component';
import { UserListingComponent } from './components/user/user-listing/user-listing.component';
import { CatgrorybasedbooklistComponent } from './components/user/catgrorybasedbooklist/catgrorybasedbooklist.component';


const routes:Routes=[
  {path:'',redirectTo:'user/home', pathMatch:'full', },
  { path: 'admin', component: AdminComponent },
  {path: 'admin/coupon', component: AdminCouponComponent},
  {path: 'login', component: LoginComponent },
  { path: 'admin/books', component: AdminBookComponent},
  {path:'admin/categories',component:CategoriesComponent},
  {path:'admin/orders',component:OrderlistComponent},
  { path: 'admin/users', component: AdminUsersComponent },
  {path:'admin/categories/search/:searchItem',component:CategoriesComponent},
  {path:'admin/book/search/:searchItem',component:AdminBookComponent},
  {path:'user/categories',component:UserCategoryComponent,canActivate:[AuthGuard]},
  {path:'user/cart',component:CartComponent,canActivate:[AuthGuard]},
  {path:'user/home', component:UserHomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'user/address', component: AddressComponent,canActivate:[AuthGuard]},
  {path:'user/wishlist', component: UserWishlistComponent,canActivate:[AuthGuard]},
  {path:'user/checkout', component: UserCheckoutComponent,canActivate:[AuthGuard]},
  {path:'user/book-detail', component: UserBookdetailComponent,canActivate:[AuthGuard]},
  {path:'user/user-list' , component: UserListingComponent,canActivate:[AuthGuard] },
  {path:'user/catbasedbooklist/:catId' , component: CatgrorybasedbooklistComponent,canActivate:[AuthGuard]},
  {path:'user/book-detail/:bookId', component: UserBookdetailComponent,canActivate:[AuthGuard]},
  {path:'user/book/search/:searchItem/:searchType' , component:UserListingComponent},
  {path:'user/allbooklist' , component:UserListingComponent}

]



@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
