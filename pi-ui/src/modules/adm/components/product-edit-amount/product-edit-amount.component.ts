import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmService } from '../../adm.service';
import { editAmountRequest } from 'src/app/core/models/Product';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-edit-amount',
  templateUrl: './product-edit-amount.component.html',
  styleUrls: ['./product-edit-amount.component.scss']
})
export class ProductEditAmountComponent implements OnInit {
  public modalForm!: FormGroup;
  public Product: any = "Nome";
  private productRequest: editAmountRequest = {
    Id: 0,
    Amount: 0
  };

  constructor(
    private fb: FormBuilder,
    private service: AdmService,
    public dialogRef: MatDialogRef<ProductEditAmountComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {

    this.Product = this.data.name;
    this.modalForm = this.fb.group({
      amount: [null, [Validators.required]],
    });

  }

  closeModal() {
    this.dialogRef.close();
  }


  editAmountProduct() {
    this.productRequest.Id = Number(this.data.id);
    this.productRequest.Amount = this.modalForm.value.amount;

    this.service.updateAmount(this.productRequest).subscribe(
      (data) => {
        this._snackBar.open(
          'Produto atualizado com sucesso',
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
}


