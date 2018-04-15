import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  group
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
      trigger('headerState', [
        state('visible', style({
          height: '75px'
        })),
        state('hidden', style({
          height: '0px'
        })),
        transition('hidden => visible', [
            group([
                animate('300ms'),
                query('@titleState',[
                    animateChild()
                ]),
                query('@mobileTitleState',[
                    animateChild()
                ]),
                query('@menuState',[
                    animateChild()
                ])
            ])
        ]),
        transition('visible => hidden', [
            group([
                query('@titleState',[
                    animateChild()
                ]),
                query('@mobileTitleState',[
                    animateChild()
                ]),
                query('@menuState',[
                    animateChild()
                ]),
                animate('300ms')
            ])
        ])
    ]),
    trigger('titleState', [
      state('visible', style({
        marginTop: '0px'
      })),
      state('hidden', style({
        marginTop: '-50px'
      })),
      transition('hidden => visible', animate('300ms')),
      transition('visible => hidden', animate('300ms'))
    ]),
    trigger('mobileTitleState', [
      state('visible', style({
        top: '37px'
      })),
      state('hidden', style({
        top: '-10px'
      })),
      transition('hidden => visible', animate('300ms')),
      transition('visible => hidden', animate('300ms'))
    ]),
    trigger('menuState', [
      state('visible', style({
        top: '37px'
      })),
      state('hidden', style({
        top: '-10px'
      })),
      transition('hidden => visible', animate('300ms')),
      transition('visible => hidden', animate('300ms'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
    showMobileMenu: boolean;
    isFixed: boolean = false;
    lastScrollTop: number = 0;
    headerState: string;
    titleState: string;
    mobileTitleState: string;
    menuState: string;

    constructor() {
        this.showMobileMenu = false;
    }

    ngOnInit() {
    }

    toggleMenu(){
        this.showMobileMenu = !this.showMobileMenu;
    }

    @HostListener("window:scroll", ['$event'])
    toggleHeader($event) {
        this.isFixed = true;

        let currentScrollTop: number = $event.path[1].scrollY;
        if(this.lastScrollTop > currentScrollTop || this.lastScrollTop === 0){
            this.titleState = 'visible';
            this.headerState = 'visible';
            this.menuState = 'visible';
            this.mobileTitleState = 'visible';
        } else {
            this.titleState = 'hidden';
            this.headerState = 'hidden';
            this.menuState = 'hidden';
            this.mobileTitleState = 'hidden';
        }

        this.lastScrollTop = currentScrollTop;
    }

    scrollTo(id){
        window.scrollTo(0,0);
    }

  @Input() title: string;
}
