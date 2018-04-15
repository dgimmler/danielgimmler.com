import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EmailService {
    private url: string = 'https://bx42kpl9fb.execute-api.us-west-2.amazonaws.com/entries';

    constructor(private http: HttpClient){ }

    sendEmail(form): Observable<any> {
        return this.http.post(this.url, JSON.stringify(form));
    }
}
