import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtravelexpenceComponent } from './addtravelexpence.component';

describe('AddtravelexpenceComponent', () => {
  let component: AddtravelexpenceComponent;
  let fixture: ComponentFixture<AddtravelexpenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtravelexpenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtravelexpenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
