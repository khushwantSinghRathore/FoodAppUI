import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedPage } from './featured.page';

describe('FeaturedPage', () => {
  let component: FeaturedPage;
  let fixture: ComponentFixture<FeaturedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeaturedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
