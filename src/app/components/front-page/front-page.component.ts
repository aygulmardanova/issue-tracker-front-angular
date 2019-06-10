import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  items = [{id: 1, name: 'First'}, {id: 2, name: 'Second'}];

  constructor() {
  }

  ngOnInit() {
  }

}
