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
    console.log("FilterComponent.ngOnInit")
    this.filterForm = this.fb.group({
      genre: [null],
      year: [null],
      rating: [null],
      runtime: [null]
    });

    localStorage.setItem("filterResult", JSON.stringify([]));
  }

  submit(): void {
    console.log("Filter.submit()");
    this.fs.addFilterResult(this.filterForm.value);

    // this.route.navigate(["grid/this.filterForm.value"]);

    // this.filterForm.reset();
    // this.route.navigate(["schedule"]);
  }
} // end class


