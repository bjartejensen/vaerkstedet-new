import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignersDesktopComponent } from './designers-desktop.component';

describe('DesignersDesktopComponent', () => {
  let component: DesignersDesktopComponent;
  let fixture: ComponentFixture<DesignersDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignersDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignersDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
