import { Component, OnInit } from '@angular/core';
import movies from '../../assets/movies.json';
import {FunctionsService} from '../functions.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  functionsService: FunctionsService;

  rating : number = 1;
  runtime : string = "1";
  year : number = 1969;
  genre: string="";

  constructor(functionsService: FunctionsService) {

    console.log("DI: ", functionsService);
    this.functionsService = functionsService;
  }

  ngOnInit(): void {
  }

  onFilterClick(){
    console.log(this.rating, this.runtime, this.year, this.genre);

    let selected_runtime_min = 0;
    let selected_runtime_max = 0;

    switch(this.runtime){
      case "1":
        selected_runtime_min=0;
        selected_runtime_max=60;
        break;
      case "2":
        selected_runtime_min=60;
        selected_runtime_max=90;
        break;
      case "3":
        selected_runtime_min=90;
        selected_runtime_max=120;
        break;
      case "4":
        selected_runtime_min=120;
        selected_runtime_max= Number.MAX_SAFE_INTEGER;
        break;
    }

    let year_min = this.year - 5;
    let year_max = this.year + 5;

    let rating_min = this.rating;
    let rating_max = 10;


    let filtered_movies = this.functionsService.getFiltered(movies,
        [this.genre],
        selected_runtime_min,
        selected_runtime_max,
        year_min, year_max,
        rating_min, rating_max)

    console.log("Found "+filtered_movies.size()+" movies matching the filter";
  }

  debug(){
    console.log(this.rating, this.runtime, this.year, this.genre);
  }


}
