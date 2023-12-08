import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FossPage } from './foss.page';

describe('FossPage', () => {
  let component: FossPage;
  let fixture: ComponentFixture<FossPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FossPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
