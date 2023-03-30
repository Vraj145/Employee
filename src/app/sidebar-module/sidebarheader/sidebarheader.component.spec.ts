import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarheaderComponent } from './sidebarheader.component';

describe('SidebarheaderComponent', () => {
  let component: SidebarheaderComponent;
  let fixture: ComponentFixture<SidebarheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
