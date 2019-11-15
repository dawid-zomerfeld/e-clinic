import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitDetailsComponent } from './add-visit-details.component';

describe('AddVisitDetailsComponent', () => {
  let component: AddVisitDetailsComponent;
  let fixture: ComponentFixture<AddVisitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVisitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVisitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
