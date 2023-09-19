import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/class/task';
import { UiService } from 'src/app/services/ui.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = "";
  day: string = "";
  reminder: boolean = false;

  formTarea: FormGroup;

  showAddTask: boolean = false;//Para cambiar el estado
  subscription: Subscription;//Para escuchar el cambio de estado

  constructor(private UiService: UiService, private formBuilder: FormBuilder){
    //Escucho el cambio de estado y guardo en subscription
    this.subscription = this.UiService.onToggle().subscribe( value => this.showAddTask = value)
    
    this.formTarea = this.formBuilder.group({
      text: ['',[Validators.required]],
      day: ['',[Validators.required]],
      reminder: ['',[Validators.required]]
    });
    
  }

  ngOnInit(): void {
  }
  
  onSubmit(){
    if(this.text.length == 0){
      alert("Ingese una tarea");
      return
    }

    const {text, day, reminder} = this;
    const newTask = {text, day, reminder};

    this.onAddTask.emit(newTask);
    this.formTarea.reset();
  }

}
