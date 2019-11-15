import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitCalendarComponent } from './add-visit-calendar.component';

describe('AddVisitCalendarComponent', () => {
  let component: AddVisitCalendarComponent;
  let fixture: ComponentFixture<AddVisitCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVisitCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVisitCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
