import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminBookComponent } from './components/admin/admin-book/admin-book.component';


const routes:Routes=[
  {path:'',redirectTo:'admin', pathMatch:'full', },
  { path: 'admin', component: AdminComponent },
  { path: 'book', component: AdminBookComponent}
  
]



@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
