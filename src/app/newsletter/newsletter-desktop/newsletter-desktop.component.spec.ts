import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterDesktopComponent } from './newsletter-desktop.component';

describe('NewsletterDesktopComponent', () => {
  let component: NewsletterDesktopComponent;
  let fixture: ComponentFixture<NewsletterDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
