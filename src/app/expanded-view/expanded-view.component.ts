import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-expanded-view',
  templateUrl: './expanded-view.component.html',
  styleUrls: ['./expanded-view.component.css']
})
export class ExpandedViewComponent implements OnInit {

  tiles: Tile[] = [
  	{text: 'Genre', cols: 1, rows: 1, color: 'lightpink'},

       {text: 'Title', cols: 2, rows: 1, color: 'lightgreen'},

      {text: 'Ratinng', cols: 1, rows: 1, color: '#DDBDF1'},

      {text: 'Poster', cols: 2, rows: 7, color: 'lightblue'},
      {text: 'Description', cols: 2, rows: 7, color: 'yellow'},

      {text: 'Seen', cols: 1, rows: 1, color: 'green'},
      {text: 'Watch', cols: 2, rows: 1, color: 'indigo'},
      {text: 'Leave', cols: 1, rows: 1, color: 'pink'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
