import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientsComponent} from './client-foler/clients/clients.component';
import {ClientDetailComponent} from './client-foler/client-detail/client-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import {LogoutComponent} from './logout/logout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import { AddClientComponent } from './add-client/add-client.component';
import { NewPropertyComponent } from './client-foler/new-property/new-property.component';
import { PropertiesListComponent } from './client-foler/properties-list/properties-list.component';
import {SearchClientComponent} from './search-client/search-client.component';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {DetailsComponent} from './property/details/details.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [

  {path: '', component: SiteLayoutComponent, children: [
    {path: '', component: RegistrationComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'logout', component: LogoutComponent},

  ]},
  {path: '', component: AppLayoutComponent, canActivate: [AuthGuard], children: [
    {path: 'detail/:id', component: ClientDetailComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'client', component: AddClientComponent},
    {path: 'new-property', component: NewPropertyComponent},
    {path: 'properties', component: PropertiesListComponent},
    {path: 'property/detail/:id', component: DetailsComponent},
    {path: 'search', component: SearchClientComponent},
    {path: 'image-upload/:id', component: ImageUploadComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
