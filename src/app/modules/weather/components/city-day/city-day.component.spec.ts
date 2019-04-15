import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDayComponent } from './city-day.component';

describe('CityDayComponent', () => {
  let component: CityDayComponent;
  let fixture: ComponentFixture<CityDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
