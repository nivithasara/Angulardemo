import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyaccountRoutingModule } from './myaccount-routing.module';
import { MyaccountComponent } from './myaccount.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [MyaccountComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    MyaccountRoutingModule,
	FormsModule
  ]
})
export class MyaccountModule { }
