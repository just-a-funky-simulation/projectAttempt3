import { Component, OnInit } from '@angular/core';
import * as movies from '../../assets/movies.json';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  console.log("movies.json:");
  console.debug(movies);
  }

}
