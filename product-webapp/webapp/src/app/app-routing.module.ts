import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/components/login/login.component';
import { RegisterComponent } from './features/register/components/register/register.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { UserDashBoardComponent } from './features/user-dash-board/user-dash-board.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {
    path:"userDashBoard",
    component:UserDashBoardComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
