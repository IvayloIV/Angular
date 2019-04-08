import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { UserGuard } from './core/guards/user.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  { 
    path: 'auth', 
    loadChildren: './components/authentication/authentication.module#AuthenticationModule',
    canLoad: [AuthGuard]
  },
  { 
    path: 'posts', 
    loadChildren: './components/posts/posts.module#PostModule',
    canLoad: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
