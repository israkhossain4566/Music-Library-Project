import { Component } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent {
  genre = {
    pop: [
      { name: 'Shake It Off', artist: 'Taylor Swift' },
      { name: 'Uptown Funk', artist: 'Bruno Mars' },
      { name: 'Shape of You', artist: 'Ed Sheeran' },
      { name: 'Bad Guy', artist: 'Billie Eilish' }
    ],
    rock: [
      { name: 'Bohemian Rhapsody', artist: 'Queen' },
      { name: 'Smells Like Teen Spirit', artist: 'Nirvana' },
      { name: "Sweet Child o'Mine", artist: "Guns N' Roses" },
      { name: 'Back in Black', artist: 'AC/DC' }
    ],
    indie: [
      { name: 'Do I Wanna Know?', artist: 'Arctic Monkeys' },
      { name: 'The Less I Know The Better', artist: 'Tame Impala' },
      { name: "The Machine", artist: 'Florence' },
      { name: 'A-Punk', artist: 'Vampire Weekend' }
     
    ],
    classical: [
      { name: 'Symphony No. 9 in D minor', artist: 'Ludwig van Beethoven' },
      { name: 'Eine kleine Nachtmusik', artist: 'Wolfgang Amadeus Mozart' },
      { name: 'Brandenburg Concerto No. 3', artist: 'Johann Sebastian Bach' },
      { name: 'Swan Lake', artist: 'Pyotr Ilyich Tchaikovsky' }
     
    ],
    metal: [
      { name: 'Enter Sandman', artist: 'Metallica' },
      { name: 'Raining Blood', artist: 'Slayer' },
      { name: 'The Trooper', artist: 'Iron Maiden' },
      { name: 'Schism', artist: 'Tool' }
     
    ]
  };

}



