import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmService } from '../../adm.service';

@Component({
  selector: 'app-product-edit-modal',
  templateUrl: './product-edit-modal.component.html',
  styleUrls: ['./product-edit-modal.component.scss']
})
export class ProductEditModalComponent implements OnInit {
  public modalForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: AdmService){}

  ngOnInit(): void {
    this.modalForm = this.fb.group ({
      product: [null],
      amount: [null, [Validators.required]],
      });
  }

  editProduct(){

  }
}
