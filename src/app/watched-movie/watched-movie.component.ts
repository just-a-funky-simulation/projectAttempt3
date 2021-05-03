import { Component, OnInit } from '@angular/core';
import movies from '../../assets/movies.json';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-watched-movie',
  templateUrl: './watched-movie.component.html',
  styleUrls: ['./watched-movie.component.css']
})
export class WatchedMovieComponent implements OnInit {

row = 421;

  tiles: Tile[] = [
  	{text: 'bklah', cols: 4, rows: 1, color: 'lightpink'},
  	{text: 'text', cols: 4, rows: 1, color: 'lightpink'},
  	{text: 'text', cols: 4, rows: 1, color: 'lightpink'},
  	{text: 'text', cols: 4, rows: 1, color: 'lightpink'}
  ]


  constructor() { }

  ngOnInit(): void {

  let watchedlist: Array<string>;
  }

}
