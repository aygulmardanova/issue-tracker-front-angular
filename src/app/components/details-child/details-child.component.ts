import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-child',
  templateUrl: './details-child.component.html',
  styleUrls: ['./details-child.component.css']
})
export class DetailsChildComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      value => console.log(value.get('id'))
    );
  }

}
