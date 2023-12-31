import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/class/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{

  tasks: Task[] = [];

  constructor(private TaskService: TaskService){
    TaskService.getTasks().subscribe((tasks) =>{
      this.tasks = tasks;
    });    
  }

  ngOnInit(): void {
  }

  deleteTask(task: Task){
    this.TaskService.deleteTask(task).subscribe( () =>{
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    });
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.TaskService.updateTaskReminder(task).subscribe();    
  }

  addTask(task:Task){
    this.TaskService.addTask(task).subscribe( (task) => {
      this.tasks.push(task);
    });
  }
}
