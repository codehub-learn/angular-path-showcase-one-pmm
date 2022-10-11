import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/home/home.component";
import {UserRegistrationComponent} from "./modules/user-registration/user-registration.component";
import {AllUsersComponent} from "./modules/all-users/all-users.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'userRegistration', component: UserRegistrationComponent},
  {path: 'allUsers', component: AllUsersComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
