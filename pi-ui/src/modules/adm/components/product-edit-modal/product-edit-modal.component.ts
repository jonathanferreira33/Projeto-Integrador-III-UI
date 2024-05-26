import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmService } from '../../adm.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductRequest } from 'src/app/core/models/Product';

@Component({
  selector: 'app-product-edit-modal',
  templateUrl: './product-edit-modal.component.html',
  styleUrls: ['./product-edit-modal.component.scss']
})
export class ProductEditModalComponent implements OnInit {
  public modalForm!: FormGroup;
  public selected = this.data.category;
  public productResponse:ProductRequest = {
    name: '',
    amount: 0,
    category: 0,
    description: ''
  } ;

  constructor(
    public dialogRef: MatDialogRef<ProductEditModalComponent>,
    private fb: FormBuilder,
    private service: AdmService,
    private _snackBar: MatSnackBar,

    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.modalForm = this.fb.group({
      name: this.data.name,
      category: this.data.category,
      description: this.data.description
    });
  }

  editProduct() {
    console.log(this.modalForm.value);
    this.productResponse.Id = this.data.id;
    this.productResponse.name = this.modalForm.value.name;
    this.productResponse.category = this.modalForm.value.category;
    this.productResponse.amount = this.data.amount;
    this.productResponse.description = this.modalForm.value.description;
    console.log('productResponse');
    console.log(this.productResponse);



    this.service.updateProduct(this.productResponse).subscribe(
      (data) => {
        this._snackBar.open(
          'Produto editado com sucesso',
          '', {
          duration: 4000
        }
        );

        setTimeout(() => {
          this.dialogRef.close();
        }, 4000);
      },
      (error) => {
        this._snackBar.open(
          'Erro ao atualizar produto',
          '', {
          duration: 4000
        }
        );
        setTimeout(() => {
          this.dialogRef.close();
        }, 4000);
      }
    )
  }

  closeModal() {
    this.dialogRef.close();
  }
}
