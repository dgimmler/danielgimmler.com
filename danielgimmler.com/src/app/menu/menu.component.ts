import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
      trigger('menuState', [
        state('visible', style({
          height: '300px'
        })),
        state('hidden',   style({
          height: '0'
        })),
        transition('hidden => visible', animate('300ms')),
        transition('visible => hidden', animate('300ms'))
    ]),
    trigger('greyOutState', [
      state('visible', style({
        opacity: '0.75'
      })),
      state('hidden', style({
        opacity: '0'
      })),
      transition('hidden => visible', animate('300ms')),
      transition('visible => hidden', animate('300ms'))
    ]),
    trigger('greyOutDesktopState', [
      state('visible', style({
        display: 'block',
        opacity: '0.5'
      })),
      state('hidden', style({
        display: 'none',
        opacity: '0'
      })),
      transition('hidden => visible', animate('300ms')),
      transition('visible => hidden', animate('300ms'))
    ])
  ]
})
export class MenuComponent implements OnInit {
    private _showMobileMenu: boolean;
    menuState: string;
    greyOutState: string;
    greyOutDesktopState: string = "hidden";

  constructor() { }

  ngOnInit() {
  }

  get showMobileMenu(): boolean {
      return this._showMobileMenu;
  }

  @Input()
  set showMobileMenu(showMobileMenu: boolean){
      this.menuState = showMobileMenu ? 'visible' : 'hidden';
      this.greyOutState = this.menuState;
      this._showMobileMenu = showMobileMenu;
  }

  toggleMenu(){
      this.showMobileMenu = !this.showMobileMenu;
      this.menuState = this.showMobileMenu ? 'visible' : 'hidden';
      this.greyOutState = this.menuState;
  }

  scrollTo(id,isMobile){
      let el = document.getElementById(id);
      el.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});

      if(isMobile)
        this.toggleMenu();
  }

  scrollToTop(){
      window.scrollTo(0,0);
  }

  setGreyoutDesktopState(state){
      this.greyOutDesktopState = state;
  }

}
