import { Component, OnInit } from '@angular/core';
import movies from '../../assets/movies.json';

export interface Tile {
  tile_type: string;
  color: string;
  cols: number;
  rows: number;
  text?: string;
  url?: string;
}


@Component({
  selector: 'app-expanded-view',
  templateUrl: './expanded-view.component.html',
  styleUrls: ['./expanded-view.component.css']
})
export class ExpandedViewComponent implements OnInit {

row = 422;

  selected_movie = movies[425];


  tiles: Tile[] = [
      {tile_type:"text", text: this.selected_movie.genre.join(", "), cols: 1, rows: 1, color: 'lightpink'},
      {tile_type:"text", text: this.selected_movie.title, cols: 2, rows: 1, color: 'Lavender'},
      {tile_type:"text", text: 'this.selected_movie.rating', cols: 1, rows: 1, color: 'LightSeaGreen'},
      {tile_type:"image", url: this.selected_movie.poster, cols: 2, rows: 7, color: 'LightSkyBlue'},
      {tile_type:"text", text: this.selected_movie.description, cols: 2, rows: 7, color: 'PeachPuff'},

  ]

  constructor() { }

  ngOnInit(): void {

  }

}
