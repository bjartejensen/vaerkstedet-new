import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsDesktopComponent } from './collections-desktop.component';

describe('CollectionsDesktopComponent', () => {
  let component: CollectionsDesktopComponent;
  let fixture: ComponentFixture<CollectionsDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionsDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
