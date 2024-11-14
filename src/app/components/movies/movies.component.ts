import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../../service/tmdb.service';
import { environment } from '../../../../environment';
import { TopRankingTableComponent } from '../shared/top-ranking-table/top-ranking-table.component';
import { Movie } from '../../../model/movie';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [TopRankingTableComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent implements OnInit {
  movieData: any;
  imgBaseSrc = environment.imgBaseSrc;

  constructor(private tmdb: TmdbService) {}

  ngOnInit(): void {
    this.getTopRatedMovies();
  }

  getTopRatedMovies() {
    this.tmdb.getTopRatedMovies().subscribe((res: any) => {
      let movieData = res.results.map((item: any) => {
        let movie: Movie = {
          id: item.id,
          mediaType: 'movie',
          title: item.title,
          voteAverage: item.vote_average,
          releaseDate: item.release_date,
          imgSrc: this.imgBaseSrc + item.poster_path,
        };

        return movie;
      });

      this.movieData = movieData;
    });
  }
}
