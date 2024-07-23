import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { AppRoutingModule } from './app-routing.module';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminHomeComponent,
    UserHomeComponent,
    CreateJobComponent,
    ApplyJobComponent,
    HamburgerMenuComponent  // Adicionar o componente de menu de hambúrguer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
