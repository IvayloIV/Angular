import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongAllComponent } from './song-all/song-all.component';
import { SongRoutingModule } from './song-routing.module';
import { SongAllResolver } from 'src/app/core/resolvers/song-all.resolver';
import { SongCreateComponent } from './song-create/song-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SortSongsPipe } from '../shared/pipes/sort-songs.pipe';
import { SongCardComponent } from './song-card/song-card.component';
import { MySongsComponent } from './my-songs/my-songs.component';
import { MySongsResolver } from 'src/app/core/resolvers/my-songs.resolver';

@NgModule({
  declarations: [
    SongAllComponent,
    SongCreateComponent,
    SortSongsPipe,
    SongCardComponent,
    MySongsComponent
  ],
  imports: [
    CommonModule,
    SongRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    SongAllResolver,
    MySongsResolver
  ]
})
export class SongModule { }
