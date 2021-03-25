import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthGuardService} from './guards/auth.guard';
import {DashboardComponent} from './components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'home', component: DashboardComponent, canActivate: [AuthGuardService],
    children: [

    ]
  },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
