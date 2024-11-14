import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating-cell',
  standalone: true,
  imports: [DecimalPipe, MatIconModule],
  templateUrl: './rating-cell.component.html',
  styleUrl: './rating-cell.component.scss',
})
export class RatingCellComponent {
  voteAverage = input<number>();
}
