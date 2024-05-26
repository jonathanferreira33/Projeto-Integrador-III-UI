import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-add-modal',
  templateUrl: './user-add-modal.component.html',
  styleUrls: ['./user-add-modal.component.scss']
})
export class UserAddModalComponent implements OnInit {
  public modalForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
  }

  addUser(){

  }
}
