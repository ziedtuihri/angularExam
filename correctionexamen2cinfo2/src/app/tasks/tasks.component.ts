import { Component } from '@angular/core';
import { Task } from '../models/task';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  listTasks: Task[] = []
  nbTasks!: number;
  constructor(private pS: ProjectsService) {
    this.pS.getTasks().subscribe({
      next : (data)=>this.listTasks = data as Task[]
    })
  }

  calculTasks() {
    this.nbTasks = 0;
    this.nbTasks = this.listTasks.filter((t)=>t.status === 'Done').length
  }
}
