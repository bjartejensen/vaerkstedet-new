import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDesignerComponent } from './single-designer.component';

describe('SingleDesignerComponent', () => {
  let component: SingleDesignerComponent;
  let fixture: ComponentFixture<SingleDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleDesignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
