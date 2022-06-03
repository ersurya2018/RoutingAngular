import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//this is import AboutCompanycomponent routing this is sub menu of about
import { AboutCompanyComponent } from './about-company/about-company.component';
//this is import Aboutmecomponent routing this is sub menu of about
import { AboutMeComponent } from './about-me/about-me.component';
//this is import aboutcomponent routing
import { AboutComponent } from './about/about.component';
//this is import homecomponent routing
import { HomeComponent } from './home/home.component';
//this is import RegUsercomponent routing
import { RegUserComponent } from './reg-user/reg-user.component';
//this is import usercomponent routing
import { UserComponent } from './user/user.component';


const routes: Routes = [
 {
   path:"",
   component:HomeComponent
 },
 {
   path:"About",
   component:AboutComponent,
   children:[
     {
       path:"company",
       component:AboutCompanyComponent
     },
     {
       path:"me",
       component:AboutMeComponent
     }
   ]
 },
 {
   path:"User/:id",
   component:UserComponent
 },
 {
   path:"Register",
   component:RegUserComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
