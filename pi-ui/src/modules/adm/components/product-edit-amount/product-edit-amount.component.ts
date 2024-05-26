import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmService } from '../../adm.service';
import { editAmountRequest } from 'src/app/core/models/Product';

@Component({
  selector: 'app-product-edit-amount',
  templateUrl: './product-edit-amount.component.html',
  styleUrls: ['./product-edit-amount.component.scss']
})
export class ProductEditAmountComponent implements OnInit{
  public modalForm!: FormGroup;
  public Product:any = "Nome";
  private productRequest!: editAmountRequest;

  constructor(private fb: FormBuilder, private service: AdmService){}
  
  ngOnInit(): void {
    this.modalForm = this.fb.group ({
      product: [null],
      amount: [null, [Validators.required]],
      });
  }

  
  editAmountProduct(){
    this.service.updateAmount(this.productRequest).subscribe({

    });
  }

}
