import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingDesktopComponent } from './wedding-desktop.component';

describe('WeddingDesktopComponent', () => {
  let component: WeddingDesktopComponent;
  let fixture: ComponentFixture<WeddingDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
