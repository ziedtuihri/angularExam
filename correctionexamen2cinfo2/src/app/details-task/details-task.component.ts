import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { Task } from '../models/task';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-details-task',
  templateUrl: './details-task.component.html',
  styleUrls: ['./details-task.component.css']
})
export class DetailsTaskComponent {

  task !: Task;
  status = new FormControl('');
  constructor(private ac: ActivatedRoute, private pS: ProjectsService) {
    this.pS.getTaskByID(this.ac.snapshot.params['id']).subscribe({
        next : (data)=> this.task = data as Task
    })
  }

  updateTask() {
    this.task.status = this.status.value!;

    this.pS.updateTask(this.task).subscribe({
      next : ()=>{}
    })
  }
}
