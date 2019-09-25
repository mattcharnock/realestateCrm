import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientsComponent} from './client-foler/clients/clients.component';
import {ClientDetailComponent} from './client-foler/client-detail/client-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { LoginComponent } from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
const routes: Routes = [

  {path: '', component: SiteLayoutComponent, children: [
    {path: '', component: RegistrationComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
  ]},
  {path: '', component: AppLayoutComponent, children: [
    {path: 'detail/:id', component: ClientDetailComponent},
    {path: 'dashboard', component: DashboardComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
