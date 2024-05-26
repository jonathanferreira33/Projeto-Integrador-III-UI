import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from 'src/modules/adm/components/Product/dashbord.component';
import { LoginComponent } from 'src/modules/adm/components/login/login.component';
import { UserComponent } from 'src/modules/adm/components/user/user.component';
import { HomeComponent } from 'src/modules/home/components/home/home.component';

const routes: Routes = [
  // {path:'', component: HomeComponent},
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'dashbord', component: DashbordComponent},
  {path:'user', component: UserComponent},
  {path:'**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
