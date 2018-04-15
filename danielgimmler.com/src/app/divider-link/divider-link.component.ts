import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-divider-link',
  templateUrl: './divider-link.component.html',
  styleUrls: ['./divider-link.component.css']
})
export class DividerLinkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() target: string;
  @Input() color: string;

  scrollTo(id){
      let el = document.getElementById(id);
      el.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
  }

}
