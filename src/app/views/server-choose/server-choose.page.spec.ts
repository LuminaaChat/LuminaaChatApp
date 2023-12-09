import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServerChoosePage } from './server-choose.page';

describe('ServerChoosePage', () => {
  let component: ServerChoosePage;
  let fixture: ComponentFixture<ServerChoosePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ServerChoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
