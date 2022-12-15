import { Component } from '@angular/core';
import { ngbCompleteTransition } from '@ng-bootstrap/ng-bootstrap/util/transition/ngbTransition';
import { Task } from './Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      

  public taskList : Task [] =[];

  ngOnInit() {
  }

  addTask(){
    this.taskList.push(new Task());
  }

  removeTask(index:number){
    if(index > -1){
      this.taskList.splice(index,1);
    }
  }

  
  }




