import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmService } from '../../adm.service';

@Component({
  selector: 'app-product-add-modal',
  templateUrl: './product-add-modal.component.html',
  styleUrls: ['./product-add-modal.component.scss']
})
export class ProductAddModalComponent implements OnInit {
  public modalForm!: FormGroup;
  public modeselect = 'Alimentos';

  constructor(
    private __fb: FormBuilder,
    private apiService: AdmService,

  ) {

    this.modalForm = __fb.group({
      Name: ['', [Validators.required]],
      Category: ['', [Validators.required]],
      Description: ['']
    })
  } 

  ngOnInit(): void {

  }

  addProduct(){
    if(this.modalForm.valid){
      console.log(this.modalForm.value);

      this.apiService.postProduct(this.modalForm.value).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      )

    }
  }

  editAmount(product:any) {
    this.apiService.updateAmount(product).subscribe(
      (data: any[]) => {
        console.log(data);
      },
      (error) => {
        console.log('Erro ao buscar dados da API:', error);
      }
    );
  }
}
