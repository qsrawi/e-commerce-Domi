import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockItemsComponent } from './block-items.component';

describe('BlockItemsComponent', () => {
  let component: BlockItemsComponent;
  let fixture: ComponentFixture<BlockItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
