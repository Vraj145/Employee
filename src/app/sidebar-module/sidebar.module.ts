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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LeaveComponent } from './leave/leave.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';
import { TravelexpenceComponent } from './travelexpence/travelexpence.component';
import { AddexpenceComponent } from './addexpence/addexpence.component';
import { AddtravelexpenceComponent } from './addtravelexpence/addtravelexpence.component';
import { LeavedataComponent } from './leavedata/leavedata.component';




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
        path: 'userprofile',
        component: UserprofileComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'leave',
        component: LeaveComponent
      },
      {
        path: 'leavedata',
        component: LeavedataComponent
      },
      {
        path: 'reimbursement',
        component: ReimbursementComponent
      },
      {
        path: 'addexpence',
        component: AddexpenceComponent
      },
      {
        path: 'travelexpence',
        component: TravelexpenceComponent
      },
      {
        path: 'addtravelexpence',
        component: AddtravelexpenceComponent

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
    DashboardComponent,
    UserprofileComponent,
    LeaveComponent,
    ReimbursementComponent,
    TravelexpenceComponent,
    AddexpenceComponent,
// component impoet from user module 
    AboutComponent,
    DocumentComponent,
    SalaryComponent,
    SecondpageComponent,
    ThirdpageComponent,
    HeaderComponent,
    UserBaseComponent,
    AddtravelexpenceComponent,
    LeavedataComponent,
    

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(sidebarRoutes),
    UserModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SidebarModule { }
