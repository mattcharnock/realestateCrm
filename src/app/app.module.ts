import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {NgPipesModule} from 'ngx-pipes';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './client-foler/clients/clients.component';
import { ClientDetailComponent } from './client-foler/client-detail/client-detail.component';
import { NavbarComponent } from './app-sidebar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { RegistrationComponent } from './registration/registration.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { ClearSpacesPipe } from './pipes/clear-spaces.pipe';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarSiteComponent} from './navbar-site/navbar-site.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddClientComponent } from './add-client/add-client.component';
import { PropertiesListComponent } from './client-foler/properties-list/properties-list.component';
import { NewPropertyComponent } from './client-foler/new-property/new-property.component';
import { AuthGuard } from './auth.guard';
import { SearchClientComponent } from './search-client/search-client.component';
import { ListFilterPipePipe } from './pipes/list-filter-pipe.pipe';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { DetailsComponent } from './property/details/details.component';

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
    LogoutComponent,
    NavbarSiteComponent,
    LoginPageComponent,
    AddClientComponent,
    PropertiesListComponent,
    NewPropertyComponent,
    SearchClientComponent,
    ListFilterPipePipe,
    ImageUploadComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgPipesModule,
  ],
  providers: [CookieService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
