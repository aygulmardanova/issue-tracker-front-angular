import {Component, Input, OnInit} from '@angular/core';
import {Task} from 'src/app/domain/task';
import {TaskService} from '../../services/task-service/task.service';
import {retry} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  item: Task;

  constructor(private service: TaskService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id: number;
    this.route.params.subscribe(params => {
      id = params.id;
    });
    this.getById(id);
  }

  private getById(id: number) {
    this.service.getById(id).pipe(retry(3)).subscribe(
      data => this.item = data,
      error => console.error(error)
    );
  }
}
