import { Component, OnInit } from '@angular/core';
import { AdmService } from '../../adm.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddModalComponent } from '../product-add-modal/product-add-modal.component';
import { ProductEditAmountComponent } from '../product-edit-amount/product-edit-amount.component';
import { ProductEditModalComponent } from '../product-edit-modal/product-edit-modal.component';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  displayedColumns: string[] = ['name', 'amount', 'category', 'description', '#'];
  dataSource: any[] = [];
  product: any;

  constructor(
    private apiService: AdmService,
    public __dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.apiService.getData().subscribe(
      (data: any[]) => {
        this.dataSource = data;
        console.log(this.dataSource);
      },
      (error) => {
        console.error('Erro ao buscar dados da API:', error);
      }
    );
  }

  addProduct() {
    const dialogRef = this.__dialog.open(ProductAddModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }

  editAmountForm(product: any) {
    const dialogRef = this.__dialog.open(ProductEditAmountComponent);

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }

  ediProduct(product: any) {
    const dialogRef = this.__dialog.open(ProductEditModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
    
    dialogRef.close();

  }

  getValue(x:number) {

    const categorias = [
      { number: 1, value: 'NONE'}, 
      { number: 2, value: 'ALIMENTICIO'}, 
      { number: 3, value: 'ROUPAS'}, 
      { number: 4, value: 'HIGIENE'}, 
      { number: 5, value: 'HIGIENE_PESSOAL'}, 
      { number: 6, value: 'KIT'}
    ];

    return categorias.find((category) => category.number == x)?.value;
  }

}
