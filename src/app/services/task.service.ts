import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Observable, of } from 'rxjs';
import { Task } from '../class/task';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiPath = 'http://localhost:5001/';
  
  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.apiPath}tasks`);
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(`${this.apiPath}tasks`,task, httpOptions);
  }

  deleteTask(task: Task): Observable<Task>{
    return this.http.delete<Task>(`${this.apiPath}tasks/${task.id}`);
  }

  updateTaskReminder(task: Task): Observable<Task>{
    return this.http.put<Task>(`${this.apiPath}tasks/${task.id}`,task, httpOptions);
  }
}
