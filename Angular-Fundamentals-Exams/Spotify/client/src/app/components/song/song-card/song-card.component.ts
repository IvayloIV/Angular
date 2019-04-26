import { Component, OnInit, Input } from '@angular/core';
import { SongDetails } from 'src/app/core/models/song/song-details';
import { SongService } from 'src/app/core/services/song.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent implements OnInit {
  @Input() song: SongDetails;
  userId: string;

  constructor(
    private songService: SongService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.userId = sessionStorage.getItem('userId');
  }

  removeSong(songId: string) {
    this.songService.removeSong(songId).subscribe(() => {
      this.toastr.success('Song removed successfully!');
    });
  }

  likeSong(song: SongDetails) {
    this.songService.likeSong(song).subscribe(() => {
      this.toastr.success('Liked!');
    });
  }

  listenSong(song: SongDetails) {
    this.songService.listenSong(song).subscribe(() => {
      this.toastr.success(`You just listened ${song.title}`);
    });
  }
}
