import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './client-foler/clients/clients.component';
import { ClientDetailComponent } from './client-foler/client-detail/client-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { RegistrationComponent } from './registration/registration.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { ClearSpacesPipe } from './clear-spaces.pipe';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientDetailComponent,
    NavbarComponent,
    DashboardComponent,
    ReportsComponent,
    RegistrationComponent,
    SiteLayoutComponent,
    AppLayoutComponent,
    ClearSpacesPipe,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
