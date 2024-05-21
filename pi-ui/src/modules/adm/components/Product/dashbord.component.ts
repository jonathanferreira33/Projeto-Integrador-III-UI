import { Component, OnInit } from '@angular/core';
import { AdmService } from '../../adm.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddModalComponent } from '../product-add-modal/product-add-modal.component';

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

  addProduct(){
    const dialogRef = this.__dialog.open(ProductAddModalComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  editAmountForm(product:any){
    console.log("editAmountForm")
  }
}
