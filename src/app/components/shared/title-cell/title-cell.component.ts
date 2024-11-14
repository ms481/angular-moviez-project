import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-title-cell',
  standalone: true,
  imports: [RouterModule, DatePipe],
  templateUrl: './title-cell.component.html',
  styleUrl: './title-cell.component.scss',
})
export class TitleCellComponent {
  id = input<string>();
  imgSrc = input<string>();
  path = input<string>();
  releaseDate = input<string>();
  title = input<string>();
}
