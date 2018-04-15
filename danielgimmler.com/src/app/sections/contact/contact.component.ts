import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email/email.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('emailSent', [
      state('success', style({
        opacity: '0.90'
      })),
      state('failure', style({
        opacity: '0.90'
      })),
      state('notstarted', style({
        opacity: '0'
      })),
      transition('notstarted => failure', animate('300ms')),
      transition('notstarted => success', animate('300ms')),
      transition('success => notstarted', animate('300ms')),
      transition('failure => notstarted', animate('300ms'))
    ])
  ]
})
export class ContactComponent implements OnInit {
    emailSent = 'notstarted';
    responseMsg = {
        success: "Thank you! I got your message and I'll get back to you soon!",
        failure: "Something went wrong... I may not have gotten your message, so if you want to be sure to reach me, please try again or reach out to me directly at daniel.jm.gimmler@gmail.com. Thank you for reaching out!"
    }
    messageColors = {
        success: "#4fb7f6",
        failure: "#D56A74"
    }

  constructor(private service: EmailService) { }

  ngOnInit() {
  }

  sendEmail(form){
      this.service.sendEmail({
          name: form.controls.name.value,
          email: form.controls.email.value,
          subject: form.controls.subject.value,
          message: form.controls.message.value
      })
        .subscribe(response => {
            if(response.statusCode !== 200)
                this.emailSent = "failure";
            else this.emailSent = "success";
        });

      form.reset();
  }

  closeMsg(){
      this.emailSent = "notstarted";
  }

}
