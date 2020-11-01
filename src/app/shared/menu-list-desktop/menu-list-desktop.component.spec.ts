import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListDesktopComponent } from './menu-list-desktop.component';

describe('MenuListDesktopComponent', () => {
  let component: MenuListDesktopComponent;
  let fixture: ComponentFixture<MenuListDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
