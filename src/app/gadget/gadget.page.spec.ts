import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GadgetPage } from './gadget.page';

describe('GadgetPage', () => {
  let component: GadgetPage;
  let fixture: ComponentFixture<GadgetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GadgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
