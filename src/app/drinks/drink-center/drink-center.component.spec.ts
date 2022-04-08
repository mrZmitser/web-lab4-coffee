import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkCenterComponent } from './drink-center.component';

describe('DrinkCenterComponent', () => {
  let component: DrinkCenterComponent;
  let fixture: ComponentFixture<DrinkCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
