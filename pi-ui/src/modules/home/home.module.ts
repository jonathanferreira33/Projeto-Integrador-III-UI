import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from 'src/app/core/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule
  ]
})

export class HomeModule { }
