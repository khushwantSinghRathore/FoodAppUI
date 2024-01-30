import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.page.html',
  styleUrls: ['./forgetpass.page.scss'],
})
export class ForgetpassPage implements OnInit {
  issubmit = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  login() {}

  submit() {
    this.issubmit = true;
  }

  resubmit() {
    this.issubmit = false;
  }

  continue() {
    this.router.navigateByUrl('/resetpass');
  }
}
