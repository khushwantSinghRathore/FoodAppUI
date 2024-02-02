import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  itemMenu = [
    { img: 'assets/burger 1.png', dis: 'Burgers' },
    { img: 'assets/pizza 1.png', dis: 'Pizza' },
    { img: 'assets/meat_ 1.png', dis: 'Meat' },
    { img: 'assets/ice cream 1.png', dis: 'Icecream' },
  ];

  itemoffer = [
    {
      img: 'assets/view-3d-burger-meal-with-french-fries 1.png',
      titl: 'McDonald’s(Best Offer)',
      dis: '$4.99 Delivery Fee . 15-30 min',
      offr: 'Free Item(Spend $10)',
      str: '4.5',
    },
    {
      img: 'assets/delicious-pizza-indoors 1.png',
      titl: 'Supreme Pizza',
      dis: '$2.99 Delivery Fee . 15-30 min',
      offr: 'Buy 1 Get 1 Free',
      str: '4.5',
    },
  ];

  menuItem = [
    {
      img: 'assets/yyy@1 1.png',
      dis: 'Mc Double',
      rate: '20.99',
    },
    {
      img: 'assets/yuyuyyuy@1 1.png',
      dis: 'Supreme Pizza',
      rate: '15.99',
    },
  ];
  constructor(private menucontroller: MenuController, private router: Router) {}

  openMenu() {
    this.menucontroller.open('profile-menu');
  }

  openhotsports() {
    this.router.navigateByUrl('/hotspots');
  }
}
