import { Component, OnInit } from '@angular/core';
import { AboutMeService } from '../../services/about-me/about-me.service';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
    public content;

    constructor(private service: AboutMeService) {
        this.content = {
            title: service.getTitleStatic(),
            body: service.getBodyStatic(),
            links: this.service.getLinksStatic()
        }
    }

    ngOnInit() {
        this.service.getContent()
            .subscribe(res => {
                this.content = {
                    title: res.title,
                    body: res.body,
                    links: this.content.links
                }
            });

        this.service.getLinks()
            .subscribe(links => this.content = {
                title: this.content.title,
                body: this.content.body,
                links: links
            })
    }

    scrollTo(id){
        let el = document.getElementById(id);
        el.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    }
}
