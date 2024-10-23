import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PPS4BChatPage } from './pps4-b-chat.page';

describe('PPS4BChatPage', () => {
  let component: PPS4BChatPage;
  let fixture: ComponentFixture<PPS4BChatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PPS4BChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
