import { Component, OnInit } from '@angular/core';
import movies from '../../assets/movies.json';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-expanded-view',
  templateUrl: './expanded-view.component.html',
  styleUrls: ['./expanded-view.component.css']
})
export class ExpandedViewComponent implements OnInit {

row = 422;

  tiles: Tile[] = [
  	{text: 'genre', cols: 1, rows: 1, color: 'lightpink'},

       {text: 'title', cols: 2, rows: 1, color: 'lightgreen'},

      {text: 'runtime', cols: 1, rows: 1, color: '#DDBDF1'},

      {text: 'Poster', cols: 2, rows: 7, color: 'lightblue'},
      {text: 'descriptionn', cols: 2, rows: 7, color: 'yellow'}

  ]

  constructor() { }

  ngOnInit(): void {

  }

}
