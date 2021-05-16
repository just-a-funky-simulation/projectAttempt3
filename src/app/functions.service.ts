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


  isMovieMatchingRuntimeFilter(movie, desiredRuntimeGroup){
      let minRt=0;
      let maxRt=Number.MAX_VALUE;

      switch(desiredRuntimeGroup){
        case "1":
          minRt=0;
          maxRt=59;
          break;
        case "2":
          minRt=60;
          maxRt=85;
          break;
        case "3":
          minRt=86;
          maxRt=119;
          break;
        case "4":
          minRt=120;
          maxRt=Number.MAX_VALUE;
          break;
      }//switch end
      console.log(desiredRuntimeGroup, minRt, maxRt);
      return (movie.runTime >= minRt && movie.runTime <= maxRt)
  }


  addFilterResult(filterForm) {
      let result = movies.filter(iterator =>
          (filterForm.genre==null || iterator.genre.includes(filterForm.genre))
          &&
          (filterForm.year==null || (iterator.year >= filterForm.year-5 && iterator.year <= filterForm.year+5 ))
          &&
        (filterForm.rating==null || iterator.rating==null || (iterator.rating >= filterForm.rating-1 && iterator.rating <= filterForm.rating+1))
          &&
          (filterForm.runtime ==null || this.isMovieMatchingRuntimeFilter(iterator, filterForm.runtime) )

      );
      console.log("foundMovies 1:", result);

      console.log(result);
      localStorage.setItem("filterResult", JSON.stringify(result));
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

  }//getFiltered

  clearFiltered() {
      localStorage.setItem("filterResult", JSON.stringify([]));
  }//end clear


  getWatchedList(){
    let watchedList = localStorage.getItem('watchedList');
    if (watchedList != null){
      return JSON.parse(watchedList);
    } else {
      return [];
    }
  }

  addToWatchedList(movieId){
    let watchedList = this.getWatchedList();
    watchedList.push(movieId);
    localStorage.setItem('watchedList', JSON.stringify(watchedList));
  }

}


