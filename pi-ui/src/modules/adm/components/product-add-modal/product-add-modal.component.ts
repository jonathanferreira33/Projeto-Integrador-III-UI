import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmService } from '../../adm.service';
import { ProductRequest } from 'src/app/core/models/Product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-add-modal',
  templateUrl: './product-add-modal.component.html',
  styleUrls: ['./product-add-modal.component.scss']
})
export class ProductAddModalComponent implements OnInit {
  public modalForm!: FormGroup;
  public modeselect = 'Alimenticio';
  public productRequest!: ProductRequest;
  action: boolean = true;
  durationInSeconds = 5;

  constructor(
    private __fb: FormBuilder,
    private apiService: AdmService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ProductAddModalComponent>
  ) {

    this.modalForm = __fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['']
    })
  } 

  ngOnInit(): void {

  }

  addProduct(){
    if(this.modalForm.valid){

      //api/Product/createproduct
      this.apiService.postProduct(this.modalForm.value).subscribe(
        (data) => {
          
            this._snackBar.open(
              'Produto cadastrado com sucesso',
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
            'Erro ao cadastradar produto',
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
}
