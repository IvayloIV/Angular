import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieModule } from './componenets/movie/movie.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  { path: 'movies', loadChildren: () => MovieModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
