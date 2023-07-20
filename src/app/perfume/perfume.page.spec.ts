import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfumePage } from './perfume.page';

describe('PerfumePage', () => {
  let component: PerfumePage;
  let fixture: ComponentFixture<PerfumePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
