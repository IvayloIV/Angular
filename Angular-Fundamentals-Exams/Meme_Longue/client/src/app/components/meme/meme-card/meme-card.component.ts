import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MemeDetails } from 'src/app/core/models/meme/meme-details.model';

@Component({
  selector: 'app-meme-card',
  templateUrl: './meme-card.component.html',
  styleUrls: ['./meme-card.component.scss']
})
export class MemeCardComponent {
  @Input() meme: MemeDetails;
  @Input() isOwner: boolean;
  @Output() deleteMeme = new EventEmitter<string>();

  removeMeme(id: string) {
    this.deleteMeme.emit(id);
  }
}
