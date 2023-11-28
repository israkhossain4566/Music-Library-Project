import { Component } from '@angular/core';



@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent {
  people = [
    { name: 'Queen', link: 'http://localhost:55453/artist/Queen', imageURL: 'https://cdn.britannica.com/83/149183-050-25913164/Queen.jpg' },
    { name: "Guns N' Roses", link: 'http://localhost:55453/artist/Guns%20NRoses', imageURL: 'https://www.udiscovermusic.com/wp-content/uploads/2020/03/Guns-N-Roses-GettyImages-1201731181-1000x600.jpg' },
    { name: "AC/DC", link: 'LINK', imageURL: 'https://www.rollingstone.com/wp-content/uploads/2018/06/gettyimages-76838137-b37ffc8a-8fcb-4141-801d-f6a63a0dbeed.jpg' },
    { name: "Nirvana", link: 'http://localhost:55453/artist/Nirvana', imageURL: 'https://variety.com/wp-content/uploads/2021/09/Nirvana_Cuffaro6.jpg'},
    { name: 'Arctic Monkeys', link: 'http://localhost:55453/artist/Arctic%20Monkeys', imageURL: 'https://www.billboard.com/wp-content/uploads/media/arctic-monkeys_press-2014-650.jpg?w=650' },
    { name: 'Tame Impala', link: 'http://localhost:55453/artist/Tame%20Impala', imageURL: 'https://globalnews.ca/wp-content/uploads/2019/10/gettyimages-1164822132.jpg?quality=85&strip=all' },
    { name: 'Florence+The Machine', link: 'http://localhost:55453/artist/Florence%20%2B%20The%20Machine', imageURL: 'https://static.independent.co.uk/2022/11/20/12/b22f5b07927bec9afdb76a6e519e79c7Y29udGVudHNlYXJjaGFwaSwxNjY5MDI2MTIx-2.69713385.jpg' },
    { name: 'Vampire Weekend', link: 'http://localhost:55453/artist/Vampire%20Weekend', imageURL: 'https://www.billboard.com/wp-content/uploads/Best%20Bets%202013/best-bets-albums-vampire-weekend-650-430.jpg?w=650' },
    { name: 'Taylor Swift', link: 'http://localhost:55453/artist/Taylor%20Swift', imageURL: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-07/230713-taylor-swift-jm-1600-daea0b.jpg'},
    { name: 'Billie Eilish', link: 'http://localhost:55453/artist/Billie%20Eilish', imageURL: 'https://e1.pxfuel.com/desktop-wallpaper/470/1005/desktop-wallpaper-%E2%9C%85-3-aesthetic-billie-eilish-computer-billie-eilish.jpg'}, 
    { name: 'Bruno Mars', link: 'http://localhost:55453/artist/Bruno%20Mars', imageURL: 'https://variety.com/wp-content/uploads/2016/02/bruno-mars.jpg?w=1000&h=563&crop=1'},
    { name: 'Ed Sheeran', link: 'http://localhost:55453/artist/Ed%20Sheeran', imageURL: 'https://e3.365dm.com/23/09/2048x1152/skynews-ed-sheeran-sheeran_6291469.jpg'},
    { name: 'Ludwig van Beethoven', link: 'http://localhost:55453/artist/Ludwig%20van%20Beethoven', imageURL: 'https://i0.wp.com/pianistmusings.com/wp-content/uploads/2016/09/beethoven.jpg?fit=650%2C461&ssl=1' },
    { name: 'Johann Sebastian Bach', link: 'http://localhost:55453/artist/Johann%20Sebastian%20Bach', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Johann_Sebastian_Bach.jpg' },
    { name: 'Wolfgang Amadeus Mozart', link: '', imageURL: 'https://www.pianobook.io/wp-content/uploads/elementor/thumbs/wolfgang-amadeus-mozart-1-q7dx426ptyvx7qp02soa0sxhuzvb5wd2heqdq31gzw.jpg' },
    { name: 'Pyotr Ilyich Tchaikovsky', link: 'LINK', imageURL: 'https://myhero.com/content/images/thumbs/0134627_pyotr-ilyich-tchaikovsky.jpeg' },
    { name: 'Metallica', link: 'http://localhost:55453/artist/Metallica', imageURL: 'https://www.billboard.com/wp-content/uploads/2022/12/Metallica-press-credit-Tim-Saccenti-2022-billboard-pro-1260.jpg?w=942&h=623&crop=1'},
    { name: 'Iron Maiden', link: 'http://localhost:55453/artist/Iron%20Maiden', imageURL: 'https://cdn.apollo.audio/one/media/626b/a606/dc29/0279/95d4/95a2/iron-maiden-greatest-metal-band.jpg?quality=80&format=jpg&crop=0,0,675,1200&resize=crop'},

    { name: 'Slayer', link: 'http://localhost:55453/artist/Slayer', imageURL: 'https://i.scdn.co/image/8c81130db7b5f933412c4906c30327817f1e1b43'},
    { name: 'Tool', link: 'http://localhost:55453/artist/Tool', imageURL: 'https://www.liveabout.com/thmb/FAx45chRB3amzTQKw_HOp7iCze0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tool-Band-Picture-56a7ffb95f9b58b7d0eff5b9.jpeg'}




   
  ];

}
