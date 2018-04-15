import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  @Input() title: string;
  @Input() body: string;
  @Input() technologies: string;
  @Input() projectLink: string;
  @Input() githubLink: string;
}
