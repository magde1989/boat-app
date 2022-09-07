import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoatListComponent } from './boat-list/boat-list.component';
import { BoatServiceService } from './service/boat-service.service';
import { AddBoatComponent } from './add-boat/add-boat.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BoatListComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    AddBoatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BoatServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
