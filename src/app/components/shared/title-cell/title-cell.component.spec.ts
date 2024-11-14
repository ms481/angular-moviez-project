import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTitleCellComponent } from './title-cell.component';

describe('CustomTitleCellComponent', () => {
  let component: CustomTitleCellComponent;
  let fixture: ComponentFixture<CustomTitleCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomTitleCellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomTitleCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
