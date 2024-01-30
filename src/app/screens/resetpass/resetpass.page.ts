import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.page.html',
  styleUrls: ['./resetpass.page.scss'],
})
export class ResetpassPage implements OnInit {
  issubmit = false;
  constructor(private router: Router) {}

  ionViewDidEnter() {
    this.issubmit = false;
  }

  ngOnInit() {}

  login() {}

  resetpass() {
    this.issubmit = true;
  }

  continue() {
    this.router.navigateByUrl('/sigin');
  }
}
