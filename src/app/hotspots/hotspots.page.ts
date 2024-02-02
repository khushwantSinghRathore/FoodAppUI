import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotspots',
  templateUrl: './hotspots.page.html',
  styleUrls: ['./hotspots.page.scss'],
})
export class HotspotsPage implements OnInit {
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
    {
      img: 'assets/pngwing 3.png',
      dis: 'Chicken Wings',
      rate: '20.99',
    },
    {
      img: 'assets/cccc@2x 1.png',
      dis: 'Berry cake',
      rate: '15.99',
    },
    {
      img: 'assets/wqasd@2x 1.png',
      dis: 'Ramen',
      rate: '20.99',
    },
    {
      img: 'assets/qqq@1 1.png',
      dis: 'Ice-cream',
      rate: '15.99',
    },
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
  constructor() {}

  ngOnInit() {}
}
