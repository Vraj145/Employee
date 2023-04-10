import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { SidebarheaderComponent } from './sidebarheader/sidebarheader.component';
import { AboutComponent } from '../user-module/about/about.component';
import { DocumentComponent } from '../user-module/document/document.component';
import { SalaryComponent } from '../user-module/salary/salary.component';
import { SecondpageComponent } from '../user-module/secondpage/secondpage.component';
import { ThirdpageComponent } from '../user-module/thirdpage/thirdpage.component';
import { HeaderComponent } from '../user-module/header/header.component';
import { UserBaseComponent } from '../user-module/user-base.component';
import { UserModule } from '../user-module/user.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';




const sidebarRoutes: Routes = [

  {
    path: 'display',
    component: DisplayComponent
  },
  {
    path: 'sidebarheader',
    component: SidebarheaderComponent
  },

 

  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'user-base',
        component: UserBaseComponent,
      },
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
    SidebarComponent,
    DisplayComponent,
    SidebarheaderComponent,
// component impoet from user module 
    AboutComponent,
    DocumentComponent,
    SalaryComponent,
    SecondpageComponent,
    ThirdpageComponent,
    HeaderComponent,
    UserBaseComponent,
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(sidebarRoutes),
    UserModule,
    ReactiveFormsModule

  ]
})
export class SidebarModule { }
