import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//here we use for App Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
//this is import Footercomponent
import { FooterComponent } from './footer/footer.component';
//this is import Headercomponent
import { HeaderComponent } from './header/header.component';
//This module is use for API 
import { HttpClientModule } from '@angular/common/http';
//This module is used for FormsModule
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    //all Componet here write
    AppComponent,
    UserComponent,
    AboutComponent,
    HomeComponent,
    RegUserComponent,
    AboutMeComponent,
    AboutCompanyComponent,
    FooterComponent,
    HeaderComponent, 
  ],
  imports: [
    //All Module is impliment here 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
