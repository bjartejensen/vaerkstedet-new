import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDesktopComponent } from './find-desktop.component';

describe('FindDesktopComponent', () => {
  let component: FindDesktopComponent;
  let fixture: ComponentFixture<FindDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
