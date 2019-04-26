import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongAllComponent } from './song-all/song-all.component';
import { SongAllResolver } from 'src/app/core/resolvers/song-all.resolver';
import { SongCreateComponent } from './song-create/song-create.component';
import { MySongsComponent } from './my-songs/my-songs.component';
import { MySongsResolver } from 'src/app/core/resolvers/my-songs.resolver';

const routes: Routes = [
  { path: 'all', component: SongAllComponent, resolve: { songAll: SongAllResolver } },
  { path: 'create', component: SongCreateComponent },
  { path: 'my', component: MySongsComponent, resolve: { mySongs: MySongsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule { }
