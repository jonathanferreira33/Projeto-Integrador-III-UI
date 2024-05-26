import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdmService } from '../../adm.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.scss']
})
export class UserEditModalComponent implements OnInit {

  constructor(
    private __fb: FormBuilder,
    private service: AdmService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UserEditModalComponent>
  ) {
    
  }

  ngOnInit(): void {
  }

  closeModal(){
    this.dialogRef.close();
  }

}
