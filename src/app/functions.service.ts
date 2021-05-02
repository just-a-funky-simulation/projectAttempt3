import { Injectable } from "@angular/core";
import movies from "../assets/movies.json";

@Injectable()
export class FunctionsService {
  constructor() {}

  getMovies() {
    let data = movies;
    console.log(data);
    return data;
  }


  getFiltered(source_array, selected_genres, selected_runtime_min, selected_runtime_max, year_min, year_max, rating_min, rating_max){

  ///Gets return data from Filter screen and moves it into a seperate array that clears itself when User goes back to
  ///main menu?
  //TODO
   // return sorted_array;
  }


  onFilterButton(){

    //TODO
    //filtered = getFiltered(movies, selected_genres, selected_runtime_min, selected_runtime_max, year_min, year_max, rating_min, rating_max){

  }
}
