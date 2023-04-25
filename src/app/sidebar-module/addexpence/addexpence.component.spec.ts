import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexpenceComponent } from './addexpence.component';

describe('AddexpenceComponent', () => {
  let component: AddexpenceComponent;
  let fixture: ComponentFixture<AddexpenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddexpenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddexpenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
