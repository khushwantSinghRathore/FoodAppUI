import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  itemoffer = [
    {
      img: 'assets/top-view-delicious-pasta-arrangement 1.png',
      titl: 'Delicious Pasta',
      dis: '$8.99 Delivery Fee . 15-30 min',
      offr: 'Free Item(Spend $10)',
      str: '4.6',
    },
    {
      img: 'assets/delicious-cupcakes-with-colorful-icing 1.png',
      titl: 'Delicious Cupcakes',
      dis: '$5.99 Delivery Fee . 15-30 min',
      offr: 'Buy 1 Get 1 Free',
      str: '4.2',
    },
    {
      img: 'assets/view-3d-delicious-looking-burger 1.png',
      titl: 'Supreme Tacos',
      dis: '$2.99 Delivery Fee . 15-30 min',
      offr: 'Buy 1 Get 1 Free',
      str: '4.6',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
