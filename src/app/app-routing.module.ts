import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminBookComponent } from './components/admin/admin-book/admin-book.component';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { OrderlistComponent } from './components/admin/orderlist/orderlist.component';


const routes:Routes=[
  {path:'',redirectTo:'admin', pathMatch:'full', },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/book', component: AdminBookComponent},
  {path:'admin/categories',component:CategoriesComponent},
  {path:'admin/orders',component:OrderlistComponent}
  
]



@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
