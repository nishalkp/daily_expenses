import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewExpComponent } from './new-exp/new-exp.component';
import { HomeComponent } from './home/home.component';
import { ViewExpComponent } from './view-exp/view-exp.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'new-expense', component: NewExpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'view-exp', component: ViewExpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
