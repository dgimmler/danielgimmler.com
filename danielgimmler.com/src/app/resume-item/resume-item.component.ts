import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-item',
  templateUrl: './resume-item.component.html',
  styleUrls: ['./resume-item.component.css']
})
export class ResumeItemComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }

  @Input() title: string;
  @Input() body: string;
  @Input() color: string;
  @Input() icon: string;
}
