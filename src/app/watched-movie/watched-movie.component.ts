import { Component, OnInit } from '@angular/core';
import movies from '../../assets/movies.json';
import { FunctionsService } from "../functions.service";

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

  tiles: Tile[] = [ ]


  constructor( private fs: FunctionsService) { }

  ngOnInit(): void {
    let watchedIds = this.fs.getWatchedList();

    let watchedMovies = movies.filter(iterator => watchedIds.includes(iterator.id) );

    this.tiles = watchedMovies.map(iterator => {
      return {text: iterator.title, cols: 2, rows: 1, color: iterator.descriptioncolour}
    });



  //localStorage.setItem('myCat', 'Tom');
  //const cat = localStorage.getItem('myCat');
  }// end ng

}
