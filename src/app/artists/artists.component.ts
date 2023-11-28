import { Component } from '@angular/core';

interface Artist {
  name: string;
  biography: string;
  country: string;
  followers: number;
}


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent {
  artists: Artist[] = [
    {
      name: 'Queen',
      biography: 'Queen is a British rock band formed in London in 1970. The classic lineup consisted of Freddie Mercury, Brian May, Roger Taylor, and John Deacon.',
      country: 'United Kingdom',
      followers: 1000000
    },
    {
      name: 'Guns N\' Roses',
      biography: 'Guns N\' Roses is an American hard rock band formed in Los Angeles in 1985. The classic lineup included Axl Rose, Slash, Duff McKagan, Izzy Stradlin, and Steven Adler.',
      country: 'United States',
      followers: 800000
    },

    {
      name: 'AC/DC',
      biography: 'AC/DC is an Australian rock band known for their electrifying performances and timeless hard rock anthems.',
      country: 'Australia',
      followers: 100000
    },


    {
      name: 'Nirvana',
      biography: 'Nirvana, led by Kurt Cobain, was a pioneering American grunge band that defined the 90s alternative music scene with their groundbreaking album Nevermind and the generation-defining anthem Smells Like Teen Spirit.',
      country: 'USA',
      followers: 150000
    },



    {
      name: 'Arctic Monkeys',
      biography: "Arctic Monkeys are an English rock band formed in Sheffield in 2002. The band consists of Alex Turner, Matt Helders, Jamie Cook, and Nick O\'Malley.",
      country: 'United Kingdom',
      followers: 500000
    },
    {
      name: 'Tame Impala',
      biography: "Tame Impala is the psychedelic music project of Australian multi-instrumentalist Kevin Parker. The band's music is known for its dreamy sound and intricate production.",
      country: 'Australia',
      followers: 300000
    },
    {
      name: 'Florence + The Machine',
      biography: "Florence + The Machine is an English indie rock band led by Florence Welch. The band's music is known for its emotional and theatrical style.",
      country: 'United Kingdom',
      followers: 700000
    },
    {
      name: 'Vampire Weekend',
      biography: "Vampire Weekend is an American rock band formed in New York City in 2006. The band's music blends indie rock with elements of world music.",
      country: 'United States',
      followers: 400000
    },

    {
      name: 'Ludwig van Beethoven',
      biography: "German composer and pianist, born in December 1770. Beethoven is widely regarded as one of the greatest composers in the history of Western classical music.",
      country: 'Germany',
      followers: 500000
    },
    {
      name: 'Wolfgang Amadeus Mozart',
      biography: "Austrian composer and musician, born in January 1756. Mozart is a prolific and influential composer of the Classical era.",
      country: 'Austria',
      followers: 450000
    },
    {
      name: 'Johann Sebastian Bach',
      biography: "German composer and musician, born in March 1685. Bach is known for his compositions in the Baroque period.",
      country: 'Germany',
      followers: 400000
    },
    {
      name: 'Pyotr Ilyich Tchaikovsky',
      biography: "Russian composer, born in May 1840. Tchaikovsky is famous for his symphonies, ballets, and operas.",
      country: 'Russia',
      followers: 350000
    },
    {
      name: 'Taylor Swift',
      biography: "Taylor Swift is a globally renowned American singer-songwriter known for her captivating country and pop music, as well as her narrative songwriting style that often draws from personal experiences.",
      country: 'USA',
      followers: 6000000
    },

    {
      name: 'Billie Eilish',
      biography: "Billie Eilish is an American singer and songwriter who rose to prominence with her unique blend of electropop and dark, introspective lyrics.",
      country: 'USA',
      followers: 9000000
    },
     
    {
      name: 'Bruno Mars',
      biography: "Bruno Mars is a versatile American singer, songwriter, and performer, celebrated for his dynamic musical style that fuses pop, R&B, and funk, as well as his charismatic stage presence.",
      country: 'USA',
      followers: 900000
    },

    {
      name: 'Ed Sheeran',
      biography: "Ed Sheeran, a highly successful British singer-songwriter, is known for his heartfelt acoustic pop songs and soulful vocals, making him a prominent figure in contemporary music.",
      country: 'England',
      followers: 950000
    },

    {
      name: 'Metallica',
      biography: "Metallica is an iconic American heavy metal band formed in 1981 renowned for their high energy performances in thrash metal genre.",
      country: 'USA',
      followers: 1000000
    },

    {
      name: 'Iron Maiden',
      biography: "Iron Maiden is a British heavy metal band formed in 1975.",
      country: 'England',
      followers: 8000000
    },

    {
      name: 'Slayer',
      biography: "Slayer, an American thrash metal band formed in 1981, is renowned for its fast and aggressive style, contributing significantly to the development of the thrash metal genre.",
      country: 'USA',
      followers: 8500000
    },


    { name: 'Tool',
      biography: "Tool, an American rock band formed in 1990, is celebrated for its progressive and alternative metal sound, characterized by intricate musical compositions and thought-provoking lyrics.",
      country: 'USA',
      followers: 7500000
    },
  ];
}