import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopmenuPage } from './shopmenu.page';

describe('ShopmenuPage', () => {
  let component: ShopmenuPage;
  let fixture: ComponentFixture<ShopmenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShopmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
