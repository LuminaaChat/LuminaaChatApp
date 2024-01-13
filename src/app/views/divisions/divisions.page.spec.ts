import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DivisionsPage } from './divisions.page';

describe('DivisionsPage', () => {
  let component: DivisionsPage;
  let fixture: ComponentFixture<DivisionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DivisionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
