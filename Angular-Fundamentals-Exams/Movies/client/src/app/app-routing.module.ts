import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { UserGuard } from './core/guards/user.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'auth', loadChildren: "./components/auth/auth.module#AuthModule", canLoad: [AuthGuard] },
  { path: 'movie', loadChildren: "./components/movie/movie.module#MovieModule", canLoad: [UserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
