import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { UserGuard } from './core/guards/user.guard';
import { HomeGuard } from './core/guards/home.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [HomeGuard] },
  { path: 'auth', loadChildren: "./components/auth/auth.module#AuthModule", canLoad: [AuthGuard] },
  { path: 'event', loadChildren: "./components/event/event.module#EventModule", canLoad: [UserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
