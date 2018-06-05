import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilesDrivenComponent } from './miles-driven.component';

describe('MilesDrivenComponent', () => {
  let component: MilesDrivenComponent;
  let fixture: ComponentFixture<MilesDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilesDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilesDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
