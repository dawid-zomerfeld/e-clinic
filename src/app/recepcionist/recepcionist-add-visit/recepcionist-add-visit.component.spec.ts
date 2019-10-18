import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistAddVisitComponent } from './recepcionist-add-visit.component';

describe('RecepcionistAddVisitComponent', () => {
  let component: RecepcionistAddVisitComponent;
  let fixture: ComponentFixture<RecepcionistAddVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionistAddVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionistAddVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
