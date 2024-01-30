import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.page.html',
  styleUrls: ['./sigin.page.scss'],
})
export class SiginPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    this.router.navigateByUrl('/home');
  }

  google() {}

  fb() {}

  fp() {
    this.router.navigateByUrl('/forgetpass');
  }

  signup() {
    this.router.navigateByUrl('/sigup');
  }
}
