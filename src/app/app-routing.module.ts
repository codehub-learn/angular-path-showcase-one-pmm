import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/home/home.component";
import {UserRegistrationComponent} from "./modules/user-registration/user-registration.component";
import {AllUsersComponent} from "./modules/all-users/all-users.component";
import {NotFoundComponent} from "./core/not-found/not-found.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'userRegistration', component: UserRegistrationComponent},
  {path: 'allUsers', component: AllUsersComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
