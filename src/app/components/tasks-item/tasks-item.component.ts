import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Task } from 'src/app/class/task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit{
  @Input() task?: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  constructor(){

  }

  ngOnInit(): void {

  }

  onDelete(task:Task){
    console.log(task);
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }
}
