import { Pipe, PipeTransform } from '@angular/core';
import { SongDetails } from 'src/app/core/models/song/song-details';

@Pipe({ name: 'sortSongs' })
export class SortSongsPipe implements PipeTransform {
  transform(songs: SongDetails[]): SongDetails[] {
    const userId = sessionStorage.getItem('userId');
    const otherSongs = songs.filter(s => s._acl.creator !== userId)
    .sort((a, b) => b['likes'] - a['likes']);
    
    const mySongs = songs.filter(s => s._acl.creator === userId)
    .sort((a, b) => {
      if (a['likes'] !== b['likes']) {
        return b['likes'] - a['likes'];
      }
      
      return b['listened'] - a['listened'];
    });
    
    return otherSongs.concat(mySongs);
  }
}