// playlist.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  genre = [
    { title: 'Pop', link: 'LINK', imageURL: 'https://wallpapercave.com/wp/wp1879835.jpg' },
    { title: 'Rock', link: 'LINK', imageURL: 'https://wallpaperaccess.com/full/6532366.jpg' },
    { title: 'Indie', link: 'LINK', imageURL: 'https://wallpapercave.com/wp/wp8492388.jpg' },
    { title: 'Classical', link: 'LINK', imageURL: 'https://wallpapercave.com/wp/tFzdKhW.jpg' },
    { title: 'Metal', link: 'LINK', imageURL: 'https://wallpapercave.com/wp/tIaExXo.jpg' }
    // Add more songs as needed
  ];

  playSong(song: any) {
    // Logic to play the selected song
    console.log('Playing:', song.title);
  }
}
