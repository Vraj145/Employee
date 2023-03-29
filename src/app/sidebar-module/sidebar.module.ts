import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';

const sidebarRoutes: Routes = [
  {
    path: '',
    component: SidebarComponent
  }
];

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(sidebarRoutes),
  ]
})
export class SidebarModule { }
