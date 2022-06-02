import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RegUserComponent } from './reg-user/reg-user.component';
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
