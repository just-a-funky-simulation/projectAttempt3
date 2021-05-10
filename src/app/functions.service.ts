import { Injectable } from "@angular/core";
import movies from "../assets/movies.json";

@Injectable()
export class FunctionsService {
  filterResult = [];

  constructor() {
    if (localStorage.filterResult == null) {
      localStorage.setItem("filterResult", JSON.stringify(this.filterResult));
    }
  }

  getMovies() {
    let data = movies;
    console.log(data);
    return data;
  }

  addFilterResult(filterForm) {
    console.log(
      "1 " + movies.length + " 2 " + movies[2].year + "  3 " + filterForm.year
    );

    let index = 0;
    while (index <= movies.length - 1) {
      if (filterForm.year == movies[index].year) {
        console.log("movie: " + movies[index].year);
      }
      index = index + 1;
    }

    // let data = JSON.parse(localStorage.getItem("filterResult"));
    // data.push(filterForm);
    // localStorage.setItem("filterResult", JSON.stringify(data));
  }

  getFilter() {
    let data = JSON.parse(localStorage.getItem("filterResult"));
    return data;
  }

  getFiltered(filterForm) {
    console.log(
      "hello on Function Page:   " +
        filterForm.genre +
        "  " +
        filterForm.year +
        "  " +
        filterForm.rating +
        "  " +
        filterForm.runtime
    );
    ///Gets return data from Filter screen and moves it into a seperate array that clears itself when User goes back to
    ///main menu?
    //TODO
    // return sorted_array;
  }
}
