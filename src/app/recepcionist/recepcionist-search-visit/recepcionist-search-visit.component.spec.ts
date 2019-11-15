import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistSearchVisitComponent } from './recepcionist-search-visit.component';

describe('RecepcionistSearchVisitComponent', () => {
  let component: RecepcionistSearchVisitComponent;
  let fixture: ComponentFixture<RecepcionistSearchVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionistSearchVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionistSearchVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
