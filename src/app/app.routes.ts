import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tv',
    pathMatch: 'full',
  },
  {
    path: 'movie',
    component: MoviesComponent,
    pathMatch: 'full',
  },
  {
    path: 'movie/:id',
    component: DetailsPageComponent,
  },
  {
    path: 'tv',
    component: TvShowsComponent,
    pathMatch: 'full',
  },
  {
    path: 'tv/:id',
    component: DetailsPageComponent,
    pathMatch: 'full',
  },
];
