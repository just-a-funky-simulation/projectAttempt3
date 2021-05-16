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

  genre_choices = ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama",
                   "Fantasy", "History", "Horror", "Mystery", "Romance", "Sci-Fi", "Short", "Thriller",
                   "War", "Western"];

  runtime_choices = ["1","2","3","4"];
  constructor(
    private fs: FunctionsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // console.log("DI: ", functionsService);
    // this.functionsService = functionsService;
  }

  ngOnInit() {
    console.log("FilterComponent.ngOnInit")
    this.filterForm = this.fb.group({
      genre: [null],
      year: [null],
      rating: [null],
      runtime: [null]
    });

    localStorage.setItem("filterResult", JSON.stringify([]));
  }

  selectGenre(genre_choice){
    console.log("Selected "+ genre_choice);
    this.genre = genre_choice;
    this.filterForm.value.genre = genre_choice;
  }

   selectRuntime(runtime_choice){
      console.log("Selected "+ runtime_choice);
      this.runtime = runtime_choice;
      this.filterForm.value.runtime = runtime_choice;
    }

  submit(): void {
    console.log("Filter.submit()");
    this.fs.addFilterResult(this.filterForm.value);
    this.router.navigateByUrl('/grid')
    // this.route.navigate(["grid/this.filterForm.value"]);

    // this.filterForm.reset();
    // this.route.navigate(["schedule"]);
  }
} // end class


