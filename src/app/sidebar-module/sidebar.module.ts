import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { SidebarheaderComponent } from './sidebarheader/sidebarheader.component';

const sidebarRoutes: Routes = [
  {
    path: '',
    component: SidebarComponent
  },
  {
    path: 'display',
    component: DisplayComponent
  },
  {
    path: 'sidebarheader',
    component: SidebarheaderComponent
  }
];



@NgModule({
  declarations: [
    SidebarComponent,
    DisplayComponent,
    SidebarheaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(sidebarRoutes),
  ]
})
export class SidebarModule { }
