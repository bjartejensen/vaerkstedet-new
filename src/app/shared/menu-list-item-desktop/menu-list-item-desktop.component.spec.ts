import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListItemDesktopComponent } from './menu-list-item-desktop.component';

describe('MenuListItemDesktopComponent', () => {
  let component: MenuListItemDesktopComponent;
  let fixture: ComponentFixture<MenuListItemDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListItemDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListItemDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
