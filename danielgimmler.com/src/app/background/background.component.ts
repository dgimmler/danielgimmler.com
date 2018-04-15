import { Component, OnInit } from '@angular/core';
import { HomesplashService } from '../services/homesplash/homesplash.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
    imageUrl;

  constructor(service: HomesplashService) {
      this.imageUrl = service.getSpashPhoto();
  }

  ngOnInit() {
  }

}
