import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexWeatherComponent } from './index-weather.component';

describe('IndexWeatherComponent', () => {
  let component: IndexWeatherComponent;
  let fixture: ComponentFixture<IndexWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
