import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { DashbordComponent } from './components/Product/dashbord.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductAddModalComponent } from './components/product-add-modal/product-add-modal.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ProductEditAmountComponent } from './components/product-edit-amount/product-edit-amount.component';
import { UserComponent } from './components/user/user.component';
import { UserEditModalComponent } from './components/user-edit-modal/user-edit-modal.component';
import { UserAddModalComponent } from './components/user-add-modal/user-add-modal.component';
import { ProductEditModalComponent } from './components/product-edit-modal/product-edit-modal.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    LoginComponent,
    DashbordComponent,
    ProductAddModalComponent,
    ProductEditAmountComponent,
    ProductEditModalComponent,
    UserComponent,
    UserEditModalComponent,
    UserAddModalComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class AdmModule { }
