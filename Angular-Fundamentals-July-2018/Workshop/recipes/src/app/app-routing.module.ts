import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesModule } from './components/receipts/recipes.module';
import { AuthModule } from './components/auth/auth.module';
import { AuthGuard } from './core/guards/auth.guard';
import { UserGuard } from './core/guards/user.guard';

const routes: Routes = [
  { path: '' , pathMatch: 'full', redirectTo: '/recipes/list'},
  { path: 'auth', loadChildren: () => AuthModule, canActivate: [UserGuard] },
  { path: 'recipes', loadChildren: () => RecipesModule, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
