import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from './core/guards/auth.guard';
import { UserGuard } from './core/guards/user.guard';
import { HomeGuard } from './core/guards/home.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [HomeGuard] },
  { path: 'auth', loadChildren: "./components/auth/auth.module#AuthModule", canLoad: [AuthGuard] },
  { path: 'recipe', loadChildren: "./components/recipe/recipe.module#RecipeModule", canLoad: [UserGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
