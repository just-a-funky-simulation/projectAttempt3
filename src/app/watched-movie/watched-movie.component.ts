import { Component, OnInit } from '@angular/core';
import movies from '../../assets/movies.json';


@Component({
  selector: 'app-watched-movie',
  templateUrl: './watched-movie.component.html',
  styleUrls: ['./watched-movie.component.css']
})
export class WatchedMovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  let watchedlist: Array<string>;
  }

}
