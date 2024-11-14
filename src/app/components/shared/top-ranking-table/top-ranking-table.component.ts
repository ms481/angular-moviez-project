import { Component, input } from '@angular/core';
import { RatingCellComponent } from '../rating-cell/rating-cell.component';
import { TitleCellComponent } from '../title-cell/title-cell.component';
import { MatTableModule } from '@angular/material/table';
import { environment } from '../../../../../environment';

@Component({
  selector: 'app-top-ranking-table',
  standalone: true,
  imports: [MatTableModule, TitleCellComponent, RatingCellComponent],
  templateUrl: './top-ranking-table.component.html',
  styleUrl: './top-ranking-table.component.scss',
})
export class TopRankingTableComponent {
  tableData = input<any>();
  displayedColumns: string[] = ['rank', 'title', 'rating'];
  imgBaseSrc = environment.imgBaseSrc;
}
