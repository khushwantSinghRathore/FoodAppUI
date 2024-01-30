import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderPage } from './slider.page';

describe('SliderPage', () => {
  let component: SliderPage;
  let fixture: ComponentFixture<SliderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
