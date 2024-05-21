import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-lateral',
  templateUrl: './navbar-lateral.component.html',
  styleUrls: ['./navbar-lateral.component.scss']
})
export class NavbarLateralComponent implements OnInit{

  constructor() {}

  public navselected = false;
  public name = 'admin';


  ngOnInit() {
    
  }

  navOver(){
    this.navselected = true;
  }
  navOut() {
    this.navselected = false;
  }

}
