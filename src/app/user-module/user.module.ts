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
  {
    path: '',
    component: UserBaseComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'header',
        component: HeaderComponent
      },
      {
        path: 'document',
        component: DocumentComponent
      },
      {
        path: 'salary',
        component: SalaryComponent
      },
      {
        path: 'secondpage',
        component: SecondpageComponent
      },
      {
        path: 'thirdpage',
        component: ThirdpageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    UserBaseComponent,
    HeaderComponent,
    AboutComponent,
    DocumentComponent,
    SalaryComponent,
    SecondpageComponent,
    ThirdpageComponent
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
