import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarLateralComponent } from './components/navbar-lateral/navbar-lateral.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavbarLateralComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
