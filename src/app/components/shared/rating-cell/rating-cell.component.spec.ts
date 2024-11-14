import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCellComponent } from './rating-cell.component';

describe('RatingCellComponent', () => {
  let component: RatingCellComponent;
  let fixture: ComponentFixture<RatingCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
