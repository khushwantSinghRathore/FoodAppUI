import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.page.html',
  styleUrls: ['./featured.page.scss'],
})
export class FeaturedPage implements OnInit {
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
    {
      img: 'assets/top-view-delicious-tacos-arrangement 1.png',
      titl: 'Supreme Tacos',
      dis: '$2.99 Delivery Fee . 15-30 min',
      offr: 'Buy 1 Get 1 Free',
      str: '4.5',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
