import { Component, OnInit } from '@angular/core';
import { AboutMeService } from '../../services/about-me/about-me.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    content;
    year = (new Date()).getFullYear();

  constructor(private service: AboutMeService) {
      this.content = {
        copyright: service.getCopyrightStatic(),
        links: service.getLinksStatic()
      }
  }

  ngOnInit() {
    this.service.getLinks()
        .subscribe(links => this.content = {
            copyright: this.content.copyright,
            links: links
        });

    this.service.getCopyright()
        .subscribe(copyright => this.content = {
            copyright: copyright,
            links: this.content.links
        });
  }

  scrollTo(id,isMobile){
      let el = document.getElementById(id);
      el.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
  }

}
