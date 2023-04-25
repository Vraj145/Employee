import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelexpenceComponent } from './travelexpence.component';

describe('TravelexpenceComponent', () => {
  let component: TravelexpenceComponent;
  let fixture: ComponentFixture<TravelexpenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelexpenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelexpenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
