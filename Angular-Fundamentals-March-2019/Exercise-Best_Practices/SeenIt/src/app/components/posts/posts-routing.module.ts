import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostDetailsResolver } from 'src/app/core/resolvers/post-details.resolver';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: PostListComponent },
    { path: 'user', component: PostListComponent },
    { path: 'create', component: PostCreateComponent },
    { path: 'edit/:id', component: PostEditComponent, resolve: { post: PostDetailsResolver } },
    { path: 'details/:id', component: PostDetailsComponent, resolve: { post: PostDetailsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
