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
import { OrderlistComponent } from './components/admin/orderlist/orderlist.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminBodyComponent,
    CategoriesComponent,
    AdminBookComponent,
    AdminSidebarComponent,
    OrderlistComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,FormsModule,

  
  
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
