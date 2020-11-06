import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustommadeDesktopComponent } from './custommade-desktop.component';

describe('CustommadeDesktopComponent', () => {
  let component: CustommadeDesktopComponent;
  let fixture: ComponentFixture<CustommadeDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustommadeDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustommadeDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
