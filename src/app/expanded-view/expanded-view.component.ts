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

  tiles: Tile[] = [
  	{text: 'genre -- broken', cols: 1, rows: 1, color: 'lightpink'}, //movies[].genre breaks the entire tile, Split enteries,dont read as one string?

       {text: movies[390].title, cols: 2, rows: 1, color: 'lightgreen'},

      {text: movies[390].runTime, cols: 1, rows: 1, color: '#DDBDF1'},

      {text: movies[390].poster, cols: 2, rows: 7, color: 'lightblue'},
      {text: movies[390].description, cols: 2, rows: 7, color: 'yellow'},

      {text: 'Seen', cols: 1, rows: 1, color: 'green'},
      {text: movies[390].watched, cols: 2, rows: 1, color: 'indigo'},
      {text: 'Leave', cols: 1, rows: 1, color: 'pink'}
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
