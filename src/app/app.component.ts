import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  itemlist = [
    { icon: 'person-outline', dis: 'View profile' },
    { icon: 'bookmark-outline', dis: 'Vouchers/offers' },
    { icon: 'location-outline', dis: 'Addresses' },
    { icon: 'document-text-outline', dis: 'Orders' },
    { icon: 'help-circle-outline', dis: 'Help center' },
    { icon: 'gift-outline', dis: 'Invite friends' },
  ];

  opt = [
    {
      name: 'Settings',
    },
    {
      name: 'Terms & Condition / Privacy',
    },
    {
      name: 'Log out',
    },
  ];
  constructor() {}
}
