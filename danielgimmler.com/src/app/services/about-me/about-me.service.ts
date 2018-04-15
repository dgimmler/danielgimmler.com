import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AboutMeService {
    private baseUrl: string = 'https://bx42kpl9fb.execute-api.us-west-2.amazonaws.com/entries/?type=';

    constructor(private http: HttpClient){ }

    getContent(): Observable<any> {
        return this.http.get(this.baseUrl + 'aboutme');
    }

    getLinks(): Observable<any> {
        return this.http.get(this.baseUrl + 'socialmedialink')
    }

    getCopyright(): Observable<any> {
        return this.http.get(this.baseUrl + 'copyright');
    }

    // static getters for backup/SEO
    getTitleStatic(){
        return "Hi! My name is Daniel";
    }

    getBodyStatic(){
        return "I'm a front-end developer who loves it all.. from the presentation layer down to cranking out code and wrestling with APIs, I love to make things work. In my current role I consult and architect solutions within the ServiceNow space for enterprise and fortune 500 customers. I love to build automation and architect CMS portals to help simplify business nees, or just to cut down on the mundane and repetitive. I'm always looking to extend my reach as a web developer and learning new ways to build robust, scalable applications that make life easier.";
    }

    getLinksStatic(){
        return [
            {
                fields: {
                    url: "https://www.linkedin.com/in/daniel-gimmler/",
                    icon: "linkedin"
                }
            },
            {
                fields: {
                    url: "https://github.com/dgimmler",
                    icon: "github-alt"
                }
            }
        ];
    }

    getCopyrightStatic(){
        return {
            year: "2018",
            name: "Daniel Gimmler",
            location: "Milwaukee, WI"
        }
    }
}
