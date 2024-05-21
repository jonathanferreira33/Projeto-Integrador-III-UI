import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightgreen'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Four', cols: 2, rows: 1, color: 'lightgreen'},
  ];
}
