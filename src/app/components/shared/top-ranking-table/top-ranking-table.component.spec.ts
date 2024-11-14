import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRankingTableComponent } from './top-ranking-table.component';

describe('TopRankingTableComponent', () => {
  let component: TopRankingTableComponent;
  let fixture: ComponentFixture<TopRankingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRankingTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRankingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
