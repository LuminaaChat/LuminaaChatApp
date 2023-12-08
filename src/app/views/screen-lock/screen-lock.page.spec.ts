import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScreenLockPage } from './screen-lock.page';

describe('ScreenLockPage', () => {
  let component: ScreenLockPage;
  let fixture: ComponentFixture<ScreenLockPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScreenLockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
