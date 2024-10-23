import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PPS4AChatPage } from './pps4-a-chat.page';

describe('PPS4AChatPage', () => {
  let component: PPS4AChatPage;
  let fixture: ComponentFixture<PPS4AChatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PPS4AChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
