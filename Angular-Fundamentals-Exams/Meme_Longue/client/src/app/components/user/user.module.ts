import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileResolver } from 'src/app/core/resolvers/user-profile.resolver';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { UserMemesResolver } from 'src/app/core/resolvers/user-memes.resolver';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [
    UserProfileResolver,
    UserMemesResolver
  ]
})
export class UserModule { }
