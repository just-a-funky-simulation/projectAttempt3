import { Component, OnInit } from '@angular/core';
import movies from '../../assets/movies.json';
import { Router, ActivatedRoute } from "@angular/router";
import { FunctionsService } from "../functions.service";

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
  movieId: string;
  tiles;

  constructor(
      private routeID: ActivatedRoute,
      private router: Router,
      private fs: FunctionsService
  ) {
    this.movieId = this.routeID.snapshot.queryParamMap.get("movieId");
  }

  ngOnInit(): void {
    let selected_movie = movies.find(iterator => iterator.id == this.movieId);
    console.log("selected_movie: ", selected_movie)

    this.tiles= [
        {tile_type:"text", text: selected_movie.genre.join(", "), cols: 1, rows: 1, color: selected_movie.secondcolour},
        {tile_type:"text", text: selected_movie.title, cols: 2, rows: 1, color: selected_movie.titlecolour},
        {tile_type:"text", text: 'selected_movie.rating', cols: 1, rows: 1, color: selected_movie.secondcolour},
        {tile_type:"image", url: selected_movie.poster, cols: 2, rows: 7, color: selected_movie.colour},
        {tile_type:"text", text: selected_movie.description, cols: 2, rows: 7, color: selected_movie.descriptioncolour}
    ]
  }

  addToWatchedList(movieId){
      console.log("this.fs: ",this.fs);
      console.log("this.fs.addToWatchedList: ",this.fs.addToWatchedList);
      this.fs.addToWatchedList(movieId);
  }//
}
