import { Component, OnInit } from '@angular/core';
import movies from '../../assets/movies.json';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  rating : number = 1;
  runtime : string = "1";
  year : number = 1969;
  genre: string="";

  blah(){
    console.log(this.rating, this.runtime, this.year, this.genre);
  }

  debug(){
  console.log(this.rating, this.runtime, this.year, this.genre);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
