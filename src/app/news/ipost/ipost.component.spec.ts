import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpostComponent } from './ipost.component';

describe('IpostComponent', () => {
  let component: IpostComponent;
  let fixture: ComponentFixture<IpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
