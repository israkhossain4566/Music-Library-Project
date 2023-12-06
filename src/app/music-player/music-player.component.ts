import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
})
export class MusicPlayerComponent {
closePlaylist() {
throw new Error('Method not implemented.');
}
  isPlaying = false;
  isFavorite = false;
  volume = 50; // Initial volume (0 to 100)
openPlaylist: any;
showPlaylist: any;

  togglePlay() {
    this.isPlaying = !this.isPlaying;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  increaseVolume() {
    if (this.volume < 100) {
      this.volume += 10;
    }
  }
  decreaseVolume() {
    if (this.volume > 0) {
      this.volume -= 10;
    }
  }
}