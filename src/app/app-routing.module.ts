import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./login-module/login.module').then(x => x.LoginModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user-module/user.module').then(x => x.UserModule)
  },
  {
    path: 'sidebar',
   loadChildren: () => import('./sidebar-module/sidebar.module').then(x => x.SidebarModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
