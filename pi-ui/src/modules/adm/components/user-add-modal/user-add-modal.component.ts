import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmService } from '../../adm.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-add-modal',
  templateUrl: './user-add-modal.component.html',
  styleUrls: ['./user-add-modal.component.scss']
})
export class UserAddModalComponent implements OnInit {
  public modalForm!: FormGroup;

  constructor(
    private __fb: FormBuilder,
    private service: AdmService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UserAddModalComponent>

  ) {

    this.modalForm = __fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.pattern ("^[a-z0-9")]],
    })
  }

  

  ngOnInit(): void {
  }

  addUser(){

  }

  closeModal(){
    this.dialogRef.close();
  }
}
