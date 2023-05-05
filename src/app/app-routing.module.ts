import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteNotFoundComponent } from '../app/public/master-page/errors/route-not-found/route-not-found.component'
import { RequestPageComponent } from './modules/pages/request-page/request-page.component';

const routes: Routes = [
  {
    path:"home",
    component: RequestPageComponent
  },
  {
    path: "",
    pathMatch:"full",
    redirectTo: "/home"
  },
  {
    path: "**",
    component: RouteNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
