import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVisitDetailsComponent } from './search-visit-details.component';

describe('SearchVisitDetailsComponent', () => {
  let component: SearchVisitDetailsComponent;
  let fixture: ComponentFixture<SearchVisitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVisitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVisitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
