import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminBodyComponent } from './components/admin/admin-body/admin-body.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
