import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume-service/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
    items;

  constructor(private service: ResumeService) {
    this.items = service.getResumeItemsStatic();
  }

  ngOnInit() {
    this.service.getResumeItems()
      .subscribe(items => this.items = items);
  }
}
