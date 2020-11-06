import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustommadeComponent } from './custommade.component';

describe('CustommadeComponent', () => {
  let component: CustommadeComponent;
  let fixture: ComponentFixture<CustommadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustommadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustommadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
