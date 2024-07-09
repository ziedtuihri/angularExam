import { Component } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../models/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  listProjects: Project[] = [];
  constructor(private pS:ProjectsService,private r : Router){
    this.pS.getProjects().subscribe({
      next: (data) => this.listProjects = data as Project[],
      error : (err)=> console.log(err)
    })
  }

  toAddTask(id: number) {
    this.r.navigate(['/addTask',id])
  }
}
