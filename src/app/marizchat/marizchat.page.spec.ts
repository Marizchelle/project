import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarizchatPage } from './marizchat.page';

describe('MarizchatPage', () => {
  let component: MarizchatPage;
  let fixture: ComponentFixture<MarizchatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MarizchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
