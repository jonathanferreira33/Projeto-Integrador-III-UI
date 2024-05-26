import { Component, OnInit } from '@angular/core';
import { AdmService } from '../../adm.service';
import { MatDialog } from '@angular/material/dialog';
import { UserAddModalComponent } from '../user-add-modal/user-add-modal.component';
import { UserEditModalComponent } from '../user-edit-modal/user-edit-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', '#'];
  dataSource: any[] = [];
  user: any;

  constructor(
    private apiService: AdmService,
    public __dialog: MatDialog

  ){}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.apiService.getDataUser().subscribe(
      (data: any[]) => {
        this.dataSource = data; 
        console.log(this.dataSource);
      },
      (error) => {
        console.error('Erro ao buscar dados da API:', error);
      }
    );
  }

  addUser() {
    const dialogRef = this.__dialog.open(UserAddModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.fetchData();
    });
  }

  editUser(user:any){
    const dialogRef = this.__dialog.open(UserEditModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.fetchData();
    });
  }
}
