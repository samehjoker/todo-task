import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('menuMinAnimation', [
      state('true', style({
        width: '80px'
      })),
      state('false', style({
        width: '250px'
      })),
      transition(':enter,false => true', [
        style({ width: '250px' }),
        animate(200, style({ width: '60px' }))
      ]),
      transition(':enter,true => false', [
        style({ width: '80px' }),
        animate(200, style({ width: '250px' }))
      ]),
    ]),
  ]
})
export class AppComponent {
  isMenuOpened = true;
  menuSidNavMode = 'side';
  mobileWidth = 544;
  activePageTitle = "Home";
  @ViewChild('snav') snav: MatSidenav;
  notificationsStyle = "material";
  ngOnInit(): void {
  }

  toggleSideMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  onMobile() {
    const isMobile = window.matchMedia(`(max-width: ${this.mobileWidth}px)`).matches;
    this.isMenuOpened = !isMobile;
    isMobile ? this.snav.close() : this.snav.open();
  }

}
