import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { AdminBookComponent } from './components/admin/admin-book/admin-book.component';
import { AdminCouponComponent } from './components/admin/admin-coupon/admin-coupon.component';
import { LoginComponent } from './components/admin/login/login.component';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { OrderlistComponent } from './components/admin/orderlist/orderlist.component';


const routes:Routes=[
  {path:'',redirectTo:'admin', pathMatch:'full', },
  { path: 'admin', component: AdminComponent },
  {path: 'admin/coupon', component: AdminCouponComponent},
  {path: 'login', component: LoginComponent },
  { path: 'admin/books', component: AdminBookComponent},
  {path:'admin/categories',component:CategoriesComponent},
  {path:'admin/orders',component:OrderlistComponent},
  { path: 'admin/users', component: AdminUsersComponent },
  {path:'admin/categories/search/:searchItem',component:CategoriesComponent},
  {path:'admin/book/search/:searchItem',component:AdminBookComponent}
  
]



@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
