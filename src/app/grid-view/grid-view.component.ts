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
  id: string;
}

@Component({
  selector: "app-grid-view",
  templateUrl: "./grid-view.component.html",
  styleUrls: ["./grid-view.component.css"]
})
export class GridViewComponent implements OnInit {
  recordId;
  display;


  tiles: Tile[];

  constructor(
    private routeID: ActivatedRoute,
    private router: Router,
    private fs: FunctionsService
  ) {
    this.display = this.fs.getFilter();
  }

  ngOnInit(): void {
    // recordId is the 'index' value of the record eg 0 or 1 from Students Database
    this.recordId = this.routeID.snapshot.paramMap.get("filter");
//     console.log("Here " + this.recordId[8]);

      let foundMovies = JSON.parse(localStorage.getItem("filterResult"));
      console.log("foundMovies 2:", foundMovies);
      this.tiles = foundMovies.map(movie => {
            return {"tile_type":"image", "url": movie.poster,"cols": 1, "rows": 5, "color": movie.colour, "id": movie.id}
          }
      );
  }//ng oninit

  onClickExpand(movieId){
  console.log("before nav")
    this.router.navigateByUrl('/expanded?movieId='+movieId)
    console.log("after nav")
  }

}
