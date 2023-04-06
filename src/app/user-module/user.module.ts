import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { DocumentComponent } from './document/document.component';
import { SalaryComponent } from './salary/salary.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserBaseComponent } from './user-base.component';

const userRoutes: Routes = [

];

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    // RouterModule,
    ReactiveFormsModule
  ]
})
export class UserModule { 

}
