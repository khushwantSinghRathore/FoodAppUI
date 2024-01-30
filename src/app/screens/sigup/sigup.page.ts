import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.page.html',
  styleUrls: ['./sigup.page.scss'],
})
export class SigupPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    this.router.navigateByUrl('/sigin');
  }

  google() {}

  fb() {}

  signup() {
    this.router.navigateByUrl('/sigin');
  }
}
