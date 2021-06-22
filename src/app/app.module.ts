import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from "@auth0/angular-jwt";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component'
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    RegistrationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem("access_token");
        },
      },
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
