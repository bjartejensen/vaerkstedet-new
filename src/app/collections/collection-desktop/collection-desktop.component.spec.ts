import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionDesktopComponent } from './collection-desktop.component';

describe('CollectionDesktopComponent', () => {
  let component: CollectionDesktopComponent;
  let fixture: ComponentFixture<CollectionDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
