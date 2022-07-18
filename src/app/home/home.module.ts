import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationModule } from './registration/registration.module';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RegistrationModule
  ]
})
export class HomeModule { }
