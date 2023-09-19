import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = "Mi lista de tareas";
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(private UiService: UiService,
    private Router: Router){
    this.subscription = this.UiService.onToggle().subscribe( value => this.showAddTask = value)
  }

  toggleAddTask(){
    this.UiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.Router.url === route;
  }
}
