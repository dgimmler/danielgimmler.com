import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ResumeService {
  private url: string = 'https://bx42kpl9fb.execute-api.us-west-2.amazonaws.com/entries/?type=resumeitem';

  constructor(private http: HttpClient){ }

  getResumeItems(){
      return this.http.get(this.url);
  }

  getResumeItemsStatic(){
      return [
          {
              fields: {
                  title: 'Code Monkeying',
                  body: 'I love to sling code more than anything. I find writing good code is a lot like writing good prose and I like to do it in any language, although javascript (and the Angular and React/Redux frameworks in particular) is my language of choice. I’ve designed and built websites like this one and architected dozens of apps, portals and technical solutions for enterpirse and fortune 500 companies within the ServiceNow space.',
                  color: '#1C354A',
                  icon: 'code'
              }
          },
          {
              fields: {
                  title: 'Project Management',
                  body: "I've been in the consulting business for the last couple of years. I know my way around interfacing with customers, managing projects and keeping in line with timelines.",
                  color: '#133957',
                  icon: 'cogs'
              }
          },
          {
              fields: {
                  title: 'Solution & Design',
                  body: 'User experience is at the center of front-end development and this includes laying out a UI and putting useability first. A large part of my career has involved solutioning projects that solve business needs and make life easier.',
                  color: '#073A63',
                  icon: 'puzzle-piece'
              }
          },
          {
              fields: {
                  title: 'Always Learning',
                  body: "If it isn't obvious enough already, I love code. I love finding new ways to write it better, build better apps and new areas to implement it.",
                  color: '#2e416b',
                  icon: 'lightbulb-o'
              }
          }
      ];
  }

}
