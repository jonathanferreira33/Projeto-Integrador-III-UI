import { Component } from '@angular/core';
import { AdmService } from '../../adm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private apiService: AdmService,
    private router: Router
  ){

  }

  login(){
    this.router.navigate(['/dashbord']);
  }

}
