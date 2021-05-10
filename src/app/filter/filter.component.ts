import { Component, OnInit } from "@angular/core";
import movies from "../../assets/movies.json";
import { FunctionsService } from "../functions.service";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  functionsService: FunctionsService;
  filterForm: FormGroup;
  rating: number = 1;
  runtime: string = "1";
  year: number = 1969;
  genre: string = "";

  constructor(
    private fs: FunctionsService,
    private fb: FormBuilder,
    private route: Router
  ) {
    // console.log("DI: ", functionsService);
    // this.functionsService = functionsService;
  }

  ngOnInit() {
    this.filterForm = this.fb.group({
      genre: [null],
      year: [null],
      rating: [null],
      runtime: [null]
    });
  }

  submit(): void {
    this.fs.addFilterResult(this.filterForm.value);

    // this.route.navigate(["grid/this.filterForm.value"]);

    // this.filterForm.reset();
    // this.route.navigate(["schedule"]);
  }
} // end class

// onFilterClick(){
//   console.log(this.rating, this.runtime, this.year, this.genre);

//   let selected_runtime_min = 0;
//   let selected_runtime_max = 0;

//   switch(this.runtime){
//     case "1":
//       selected_runtime_min=0;
//       selected_runtime_max=60;
//       break;
//     case "2":
//       selected_runtime_min=60;
//       selected_runtime_max=90;
//       break;
//     case "3":
//       selected_runtime_min=90;
//       selected_runtime_max=120;
//       break;
//     case "4":
//       selected_runtime_min=120;
//       selected_runtime_max= Number.MAX_SAFE_INTEGER;
//       break;
//   }

//   let year_min = this.year - 5;
//   let year_max = this.year + 5;

//   let rating_min = this.rating;
//   let rating_max = 10;

//   let filtered_movies = this.functionsService.getFiltered(movies,
//       [this.genre],
//       selected_runtime_min,
//       selected_runtime_max,
//       year_min, year_max,
//       rating_min, rating_max)

//   console.log("Found "+filtered_movies.size()+" movies matching the filter");
// }

// debug(){
//   console.log(this.rating, this.runtime, this.year, this.genre);
// }
