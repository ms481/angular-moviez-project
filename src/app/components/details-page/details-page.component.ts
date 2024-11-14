import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../../service/tmdb.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss',
})
export class DetailsPageComponent implements OnInit {
  mediaId: string | null = '';
  mediaType: string = '';

  movieDetails: any;
  imgBaseSrc = 'https://image.tmdb.org/t/p/w342';

  isReady = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tmdb: TmdbService
  ) {}

  ngOnInit(): void {
    this.mediaId = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.url.subscribe((params) => {
      this.mediaType = params[0].path;
    });
    if (this.mediaType === 'movie') {
      this.getMovieDetails(this.mediaId!);
    } else {
      this.isReady = false;
    }
  }

  getMovieDetails(id: string) {
    this.tmdb.getMovieDetails(id).subscribe((res) => (this.movieDetails = res));
  }
}
