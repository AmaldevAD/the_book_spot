import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminBookComponent } from './components/admin/admin-book/admin-book.component';
import { AdminCouponComponent } from './components/admin/admin-coupon/admin-coupon.component';
import { LoginComponent } from './components/admin/login/login.component';


const routes:Routes=[
  {path:'',redirectTo:'admin', pathMatch:'full', },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/book', component: AdminBookComponent},
  {path: 'admin/coupon', component: AdminCouponComponent},
  {path: 'login', component: LoginComponent }
  
]



@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
