import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subjet = new Subject<any>();

  constructor() { }

  // Metodo de cambio de estado
  toggleAddTask():void{
    this.showAddTask = !this.showAddTask;
    this.subjet.next(this.showAddTask);
  }

  // Metodo para ver cambio de estados
  onToggle():Observable<any>{
    return this.subjet.asObservable();
  }
}
