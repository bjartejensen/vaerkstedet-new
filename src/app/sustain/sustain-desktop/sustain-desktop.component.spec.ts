import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainDesktopComponent } from './sustain-desktop.component';

describe('SustainDesktopComponent', () => {
  let component: SustainDesktopComponent;
  let fixture: ComponentFixture<SustainDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SustainDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SustainDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
