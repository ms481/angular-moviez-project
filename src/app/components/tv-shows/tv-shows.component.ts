import { Component } from '@angular/core';
import { environment } from '../../../../environment';
import { TmdbService } from '../../../service/tmdb.service';
import { TopRankingTableComponent } from '../shared/top-ranking-table/top-ranking-table.component';

@Component({
  selector: 'app-tv-shows',
  standalone: true,
  imports: [TopRankingTableComponent],
  templateUrl: './tv-shows.component.html',
  styleUrl: './tv-shows.component.scss',
})
export class TvShowsComponent {
  tvData: any;
  imgBaseSrc = environment.imgBaseSrc;

  constructor(private tmdb: TmdbService) {}

  ngOnInit(): void {
    this.getTopRatedTvShows();
  }

  getTopRatedTvShows() {
    this.tmdb.getTopRatedTvShows().subscribe((res: any) => {
      let tvData = res.results.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          voteAverage: item.vote_average,
          releaseDate: item.first_air_date,
          imgSrc: this.imgBaseSrc + item.poster_path,
        };
      });

      this.tvData = tvData;
    });
  }
}
