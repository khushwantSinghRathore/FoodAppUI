import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotspotsPage } from './hotspots.page';

describe('HotspotsPage', () => {
  let component: HotspotsPage;
  let fixture: ComponentFixture<HotspotsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HotspotsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
