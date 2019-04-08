import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsRoutingModule } from './posts-routing.module';

import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostInfoComponent } from './post-info/post-info.component';

import { CommentsModule } from '../comments/comments.module';
import { PostDetailsResolver } from 'src/app/core/resolvers/post-details.resolver';

@NgModule({
  declarations: [
    PostListComponent,
    PostCreateComponent,
    PostEditComponent,
    PostDetailsComponent,
    PostInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PostsRoutingModule,
    CommentsModule
  ],
  providers: [
    PostDetailsResolver
  ]
})
export class PostModule { }
