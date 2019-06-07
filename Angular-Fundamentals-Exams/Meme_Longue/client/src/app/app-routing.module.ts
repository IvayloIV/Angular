import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { UserGuard } from './core/guards/user.guard';
import { LoggedGuard } from './core/guards/logged.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [LoggedGuard] },
  { path: 'auth', loadChildren: "./components/auth/auth.module#AuthModule", canLoad: [AuthGuard] },
  { path: 'meme', loadChildren: "./components/meme/meme.module#MemeModule", canLoad: [UserGuard] },
  { path: 'user', loadChildren: "./components/user/user.module#UserModule", canLoad: [UserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
