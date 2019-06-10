import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../domain/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() isFirst: boolean;
  @Input() isLast: boolean;
  @Input() ind: number;
  @Input() item: Task;

  @Output() remove = new EventEmitter<Task>();
  @Output() down = new EventEmitter<Task>();
  @Output() up = new EventEmitter<Task>();

  constructor() {
  }

  ngOnInit() {
    // console.log(this.ind, this.isFirst, this.isLast);
  }

  onRemove() {
    this.remove.emit(this.item);
  }

  onMoveDown() {
    this.down.emit(this.item);
  }

  onMoveUp() {
    this.up.emit(this.item);
  }

}
