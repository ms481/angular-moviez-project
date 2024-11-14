import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  tmdbUrl = environment.tmdbBaseUrl;
  apiToken = environment.tmdbApiToken;

  constructor(private http: HttpClient) {}

  /**
   * Same result, that is displayed in this url:
   * https://www.themoviedb.org/movie/top-rated
   */
  getTopRatedMovies() {
    // ToDo: HttpInterceptor should be used
    const headers = new HttpHeaders().append(
      'Authorization',
      `Bearer ${this.apiToken}`
    );
    const params = new HttpParams().appendAll({
      include_adult: false,
      include_video: false,
      page: 1,
      sort_by: 'vote_average.desc',
      'vote_count.gte': 300,
    });
    return this.http.get(this.tmdbUrl + '/discover/movie', { headers, params });
  }

  getMovieDetails(id: string) {
    // ToDo: HttpInterceptor should be used
    const headers = new HttpHeaders().append(
      'Authorization',
      `Bearer ${this.apiToken}`
    );
    return this.http.get(this.tmdbUrl + '/movie/' + id, { headers });
  }

  /**
   * Same result, that is displayed in this url:
   * https://www.themoviedb.org/tv/top-rated
   */
  getTopRatedTvShows() {
    // ToDo: HttpInterceptor should be used
    const headers = new HttpHeaders().append(
      'Authorization',
      `Bearer ${this.apiToken}`
    );
    const params = new HttpParams().appendAll({
      include_adult: false,
      include_null_first_air_dates: false,
      page: 1,
      sort_by: 'vote_average.desc',
      'vote_count.gte': 300,
    });

    return this.http.get(this.tmdbUrl + '/discover/tv', { headers, params });
  }

  search(query: any) {
    const params = new HttpParams().append('query', query);
    // ToDo: HttpInterceptor should be used
    const headers = new HttpHeaders().append(
      'Authorization',
      `Bearer ${this.apiToken}`
    );
    return this.http.get(this.tmdbUrl + '/search/multi', { headers, params });
  }
}
