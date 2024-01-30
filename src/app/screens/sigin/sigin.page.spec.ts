import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiginPage } from './sigin.page';

describe('SiginPage', () => {
  let component: SiginPage;
  let fixture: ComponentFixture<SiginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SiginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
