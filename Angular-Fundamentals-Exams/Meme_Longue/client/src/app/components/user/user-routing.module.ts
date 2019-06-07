import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileResolver } from 'src/app/core/resolvers/user-profile.resolver';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserMemesResolver } from 'src/app/core/resolvers/user-memes.resolver';

const routes: Routes = [
  { 
    path: 'profile/:id',
    component: UserProfileComponent,
    resolve: { 
      userProfile: UserProfileResolver,
      userMemes: UserMemesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
