import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllMemesComponent } from './all-memes/all-memes.component';
import { MemeDetailsComponent } from './meme-details/meme-details.component';
import { MemeEditComponent } from './meme-edit/meme-edit.component';
import { CreateMemeComponent } from './create-meme/create-meme.component';

import { AllMemesResolver } from 'src/app/core/resolvers/all-memes.resolver';
import { MemeDetailsResolver } from 'src/app/core/resolvers/meme-details.resolver';

const routes: Routes = [
  { path: 'all', component: AllMemesComponent, resolve: { allMemes: AllMemesResolver } },
  { path: 'create', component: CreateMemeComponent },
  { path: 'details/:id', component: MemeDetailsComponent, resolve: { memeDetails: MemeDetailsResolver } },
  { path: 'edit/:id', component: MemeEditComponent, resolve: { memeDetails: MemeDetailsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemeRoutingModule { }
