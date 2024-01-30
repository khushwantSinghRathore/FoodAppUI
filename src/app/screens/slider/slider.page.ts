import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {
  constructor(private router: Router) {}

  arr = [
    { img: 'assets/Group 8.png', head: 'Trending Foods' },
    { img: 'assets/Take Away-pana 1.png', head: 'Fast Delivery' },
    { img: 'assets/Pasta-pana 1.png', head: 'Find Nearby Restaurants' },
    { img: 'assets/Screen.png', head: 'Easy Ordering' },
  ];

  ngOnInit() {}

  takeMe() {
    this.router.navigateByUrl('/welcome');
  }
}
