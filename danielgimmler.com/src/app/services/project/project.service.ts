import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProjectService {
  private url: string = 'https://bx42kpl9fb.execute-api.us-west-2.amazonaws.com/entries/?type=project';

  constructor(private http: HttpClient){ }

  // RESTful and dynamic content getters
  getProjects(){
      return this.http.get(this.url);
  }

  // static getters for backup/SEO
  getProjectsStatic(){
      return [
        {
            fields: {
                name: "About this site",
                description: "This site is written in Typescript utilizing the Angular 5 framework. It is hosted on an Amazon S3 / Route 52 Stack and leverages Contentful as the CMS. The Angular CLI was used to bootstrap the project layout, versioning control tool (Bower) and package manager (WebPack). I also used Twitter Bootstrap to help with the UI layout. You can take a look at the sanatized source code on GitHub HERE",
                technologies: "Angular 5, Bootstrap 4, RESTful API integration, AWS S3 & Route52",
                projectLink: "http://danielgimmler.com",
                githubLink: "http://github.com/dgimmler/daniel-gimmler-dot-com"
            }
        },
        {
            fields: {
                name: "Juliangimmler.com",
                description: "My brother needed a website. I needed a React project. This project worked out well for the both of us. I used the same S3 / Route 52 stack to host the website and the same Contentufl API to run the CMS. Unlike this site, however, I wrote the site in javascript utilizing a React / Redux architecture. You can check the site out HERE and take a look at the sanatized source code on GitHub HERE.",
                technologies: "React / Redux, RESTful API integration, AWS S3 & Route52",
                projectLink: "http://juliangimmler.com",
                githubLink: "http://github.com/dgimmler/julian-gimmler-dot-com"
            }
        }
      ];
  }
}
