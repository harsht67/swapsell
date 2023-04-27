import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/components/login/login.component';
import { RegisterComponent } from './features/register/components/register/register.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { UserDashBoardComponent } from './features/user-dash-board/user-dash-board.component';
import { EditUserDetailsComponent } from './features/edit-user-details/edit-user-details.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {
    path:"userDashBoard",
    component:UserDashBoardComponent
  },
  {
    path:"editDetails",
    component:EditUserDetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
