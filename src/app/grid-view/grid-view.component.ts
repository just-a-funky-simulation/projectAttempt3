import { Component, OnInit } from '@angular/core';
import * as movies from '../../assets/movies.json';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

 tiles: Tile[] = [
  	{text: 'Poster', cols: 1, rows: 5, color: 'lightblue'},
  		{text: 'Poster', cols: 1, rows: 5, color: 'lightblue'},
  			{text: 'Poster', cols: 1, rows: 5, color: 'lightgreen'},
  				{text: 'Poster', cols: 1, rows: 5, color: 'lightpink'},
  					{text: 'Poster', cols: 1, rows: 5, color: 'lightblue'},
            		{text: 'Poster', cols: 1, rows: 5, color: 'lightblue'},
            			{text: 'Poster', cols: 1, rows: 5, color: 'lightgreen'},
            				{text: 'Poster', cols: 1, rows: 5, color: 'lightpink'},
            					{text: 'Poster', cols: 1, rows: 5, color: 'lightblue'},
                      		{text: 'Poster', cols: 1, rows: 5, color: 'lightblue'},
                      			{text: 'Poster', cols: 1, rows: 5, color: 'lightgreen'},
                      				{text: 'Poster', cols: 1, rows: 5, color: 'lightpink'},


  ]
  constructor() { }

  ngOnInit(): void {
  console.log("movies.json:");
  console.debug(movies);
  }

}
