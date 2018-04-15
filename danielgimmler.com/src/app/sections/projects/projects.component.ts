import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    projects;

  constructor(private service: ProjectService) {
      this.projects = service.getProjectsStatic();
  }

  ngOnInit() {
      this.service.getProjects()
          .subscribe(projects => this.projects = projects);
  }
}
