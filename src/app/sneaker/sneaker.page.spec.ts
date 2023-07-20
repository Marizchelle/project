import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SneakerPage } from './sneaker.page';

describe('SneakerPage', () => {
  let component: SneakerPage;
  let fixture: ComponentFixture<SneakerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SneakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
