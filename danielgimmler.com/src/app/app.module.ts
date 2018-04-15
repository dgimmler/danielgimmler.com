// core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// libararies
import { MarkdownModule } from 'ngx-md';

// sections
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { ResumeComponent } from './sections/resume/resume.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { FooterComponent } from './sections/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

// components
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { DividerLinkComponent } from './divider-link/divider-link.component';
import { MenuComponent } from './menu/menu.component';
import { ResumeItemComponent } from './resume-item/resume-item.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './sections/contact/contact.component';

// services
import { HomesplashService } from './services//homesplash/homesplash.service';
import { AboutMeService } from './services/about-me/about-me.service';
import { ResumeService } from './services/resume-service/resume.service';
import { ProjectService } from './services/project/project.service';
import { EmailService } from './services/email/email.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ResumeComponent,
    ProjectsComponent,
    AboutMeComponent,
    ResumeItemComponent,
    FooterComponent,
    ProjectComponent,
    MenuComponent,
    NotFoundComponent,
    DividerLinkComponent,
    ContactComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
        {
            path: '',
            component: HomeComponent
        },
        {
            path: '#about-me',
            component: AboutMeComponent
        },
        {
            path: '#resume',
            component: ResumeComponent
        },
        {
            path: '#ProjectsComponent',
            component: HomeComponent
        },
        {
            path: '**',
            component: NotFoundComponent
        }
    ]),
    MarkdownModule.forRoot()
  ],
  providers: [
      HomesplashService,
      AboutMeService,
      ResumeService,
      ProjectService,
      EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
