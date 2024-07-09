import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task';
import { Project } from '../models/project';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  idProject!: number;
  constructor(private pS: ProjectsService,
    private ac: ActivatedRoute,
  private r:Router) {
    this.idProject = this.ac.snapshot.params['id'];
  }

  task = new FormGroup({
    title: new FormControl(''),
    dateD: new FormControl(''),
    dateF: new FormControl(''),
    status: new FormControl(''),
    project:new FormControl()
  });

  get dateD() {
    return this.task.get('dateD');
  }

  get dateF() {
    return this.task.get('dateF');
  }

  getError() {
    if (new Date(this.dateD!.value!) > new Date(this.dateF!.value!)) {
      return true;
    }
    return false;
  }

  addTask() {
    this.task.value.status = 'To Do';
    this.pS.getProjectByID(this.idProject).subscribe({
      next: (data) => {
        this.task.value.project = data as Project;
        this.pS.addTask(this.task.value as Task).subscribe({
          next: () => this.r.navigate(['/tasks']),
        });
      }
    })
  }

  
}
