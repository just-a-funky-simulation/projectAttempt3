import { Component, OnInit } from "@angular/core";
import movies from "../../assets/movies.json";
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
  selector: "app-grid-view",
  templateUrl: "./grid-view.component.html",
  styleUrls: ["./grid-view.component.css"]
})
export class GridViewComponent implements OnInit {
  recordId;
  display;

   selected_movie = movies[425];

  constructor(
    private routeID: ActivatedRoute,
    private route: Router,
    private fs: FunctionsService
  ) {
    this.display = this.fs.getFilter();
  }

  ngOnInit(): void {
    // recordId is the 'index' value of the record eg 0 or 1 from Students Database
    this.recordId = this.routeID.snapshot.paramMap.get("filter");
    console.log("Here " + this.recordId[8]);
  }

  tiles: Tile[] = [
          {tile_type:"image", url: this.selected_movie.poster, cols: 1, rows: 5, color: 'LightSkyBlue'},
           {tile_type:"image", url: movies[421].poster, cols: 1, rows: 5, color: 'LightSkyBlue'},
            {tile_type:"image", url: movies[422].poster, cols: 1, rows: 5, color: 'LightSkyBlue'},
             {tile_type:"image", url: movies[423].poster, cols: 1, rows: 5, color: 'LightSkyBlue'},

  ];
}
