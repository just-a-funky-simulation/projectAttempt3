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

  getFiltered(){
  ///Gets return data from Filter screen and moves it into a seperate array that clears itself when User goes back to
  ///main menu?
  }
}
