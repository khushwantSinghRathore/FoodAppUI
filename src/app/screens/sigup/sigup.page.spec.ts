import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigupPage } from './sigup.page';

describe('SigupPage', () => {
  let component: SigupPage;
  let fixture: ComponentFixture<SigupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SigupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
