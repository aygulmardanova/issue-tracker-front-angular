import {Component, OnInit} from '@angular/core';
import {Task} from '../../domain/task';
import {TaskService} from '../../services/task-service/task.service';
import {retry} from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  items: Task[] = [];
  name = '';

  constructor(private service: TaskService) {
  }

  ngOnInit() {
    this.getAll();
  }

  onRemoveItem($event: Task) {
    this.removeById($event.id);
  }

  onAdd($event) {
    $event.preventDefault();
    this.add(
      new Task(0, this.name, false)
    );
    this.name = '';
  }

  private getAll() {
    this.service.getAll().pipe(retry(3)).subscribe(
      data => this.items = data,
      error => console.error(error)
    );
  }

  private add(item: Task) {
    this.service.add(item).subscribe(
      () => this.getAll(),
      error => console.error(error)
    );
  }

  private removeById(id: number) {
    this.service.removeById(id).subscribe(
      () => this.getAll(),
      error => console.error(error)
    );
  }

  onMoveItemDown($event: Task) {
    const indexOf = this.items.indexOf($event);
    this.items = [...this.items.slice(0, indexOf),
      this.items[indexOf + 1],
      this.items[indexOf],
      ...this.items.slice(indexOf + 2, this.items.length)];
  }

  onMoveItemUp($event: Task) {
    const indexOf = this.items.indexOf($event);
    this.items = [...this.items.slice(0, indexOf - 1),
      this.items[indexOf],
      this.items[indexOf - 1],
      ...this.items.slice(indexOf + 1, this.items.length)];
  }
}
