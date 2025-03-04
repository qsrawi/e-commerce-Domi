import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterMenuComponent } from './newsletter-menu.component';

describe('NewsletterMenuComponent', () => {
  let component: NewsletterMenuComponent;
  let fixture: ComponentFixture<NewsletterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
