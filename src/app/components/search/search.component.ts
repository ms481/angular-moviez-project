import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../../../service/tmdb.service';
import {
  debounceTime,
  distinctUntilChanged,
  EMPTY,
  Observable,
  tap,
} from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    AsyncPipe,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchQuery: string = '';
  searchResult$: Observable<any> = EMPTY;
  searchResult: any[] = [];

  constructor(private router: Router, private tmdb: TmdbService) {}

  search() {
    if (this.searchQuery.length > 3) {
      this.searchResult$ = this.tmdb.search(this.searchQuery).pipe(
        debounceTime(100),
        distinctUntilChanged(),
        tap((res) => console.log('search', res))
      );
      this.searchResult$.subscribe((res) => {
        this.searchResult = res.results;
      });
    } else {
      this.searchResult = [];
    }
  }

  openDetails(id: string, mediaType: string) {
    if (mediaType === 'movie') {
      this.router.navigate(['/movie', id]);
    }
    if (mediaType === 'tv') {
      this.router.navigate(['/tv', id]);
    }
  }
}
