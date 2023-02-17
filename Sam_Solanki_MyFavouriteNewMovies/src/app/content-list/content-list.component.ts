// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-content-list',
//   templateUrl: './content-list.component.html',
//   styleUrls: ['./content-list.component.less']
// })
// export class ContentListComponent {

// }


///////// NEW CODE 

import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
   styleUrls: ['./content-list.component.less']
  
})
export class ContentListComponent implements OnInit {
  // constructor() {}

  contents: Content[];
  movieSearchText:string = '';
  searchResult: boolean | null = null;

  public inputValue: String = '';
  public searchMsg: String = '';
myFavMovie: any;

  logIdTitle(card: any){
    console.log(`${card.id}, ${card.title}`);
  }
  SearchTitle(){
    console.log(this.searchResult);
    this.searchResult = this.contents.some(content => content.title === this.movieSearchText);
  }


  ngOnInit(): void {}

  constructor(){
    this.contents =  [
    {
      id: 0,
      title: "Avengers Movies",
      description: 'Powered by Robert Downey Jr.s vibrant charm, Iron Man turbo-charges the superhero genre with a deft intelligence and infectious sense of fun',
      moviename:'IRON MAN',
      actor: 'Robert Downey Jr.',
      rating:5,
      imgURL:
        'https://resizing.flixster.com/r-vXGSGwxsq8iUnXAzv62oIaZW4=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p170620_p_v8_az.jpg',
      publisher: 'loream ipsum',
      color: '#735E52',
      fontFamily: 'OpenSans',
      filteredRow: false,
      undefined: undefined,
      null: null,  
    },
    {
      id: 1,
      title: "Avengers Next Movie",
      description: 'It isnt quite the breath of fresh air that Iron Man was, but this sequel comes close with solid performances and an action-packed plot',
      moviename:'IRON MAN 2',
      actor: 'Gwyneth Paltrow',
      rating:5,
      type: 'Action',
      imgURL:
        'https://resizing.flixster.com/sPhtVvoCC4APUavEZtHmSOmw-Ls=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p3546118_p_v8_af.jpg',
      publisher: 'loream ipsum',
      color: '#60A89A',
      fontFamily: 'poopins',
      filteredRow: false
    },
    {
      id: 2,
      title: 'HULK MOVIE',
      description: 'The Incredible Hulk may not be quite the smashing success that fans of Marvels raging behemoth might hope for, but it offers more than enough big green action to make up for its occasionally puny narrative',
      moviename:'THE INCREDIBLE HULK',
      actor: 'Edward Norton',
      rating:5,
      type: 'Comedy',
      imgURL:
        'https://resizing.flixster.com/G3zjY751W881qOfX4AFYM3nlb_s=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p176337_p_v8_am.jpg',
      publisher: 'loream ipsum',
      color: '#A32925',
      fontFamily: 'Open+Sans',
      filteredRow: false,
      undefined: undefined,
      null: null,
 

    },
    {
      id: 3,
      title: 'THOR MOVIE',
      description:'A dazzling blockbuster that tempers its sweeping scope with wit, humor, and human drama, Thor is mighty Marvel entertainment',
        moviename:'THOR',
        actor: 'Chris Hemsworth',
        rating:5,
        type: 'Drama',
      imgURL:
        'https://resizing.flixster.com/WLCWBj7qU14MQrEgydqSA0xSzRM=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p7989358_p_v8_ah.jpg',
        publisher: 'loream ipsum',
        color: '#BCBF77',
        fontFamily: 'Roboto',
        filteredRow: false,

    },
    {
      id: 4,
      title: 'MARVELS',
      description:'Thanks to a script that emphasizes its heroes humanity and a wealth of superpowered set pieces,The Avengers lives up to its hype and raises the bar for Marvel at the movies',
        moviename:'MARVELS THE AVENGERS',
        actor: 'Mark Ruffalo',
        rating:5,
        type: 'Comedy',
        imgURL:
        'https://resizing.flixster.com/OgErqH5Yg47DB-5-tfUCgl1Nmlk=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p8815512_p_v8_ax.jpg',
        publisher: 'loream ipsum',
      color: '#5884B9',
      fontFamily: 'poopins',
      filteredRow: false,
    },
    {
      id: 5,
      title: 'THE DARK WORLD',
      description:'It may not be the finest film to come from the Marvel Universe, but Thor: The Dark World still offers plenty of the humor and high-stakes action that fans have come to expect',
        moviename:'THOR: THE DARK WORLD',
        actor: 'Natalie Portman',
        rating:9,
        imgURL:'https://resizing.flixster.com/OgErqH5Yg47DB-5-tfUCgl1Nmlk=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p8815512_p_v8_ax.jpg',
        publisher: 'loream ipsum',
        type: 'Action',
      color: '#B4B86D',
      fontFamily: 'Roboto',
      filteredRow: false,
      undefined: undefined,
      null: null,
      
    },
    {
      id: 6,
      title: 'IRON MAN',
      description:'With the help of its charismatic lead, some impressive action sequences, and even a few surprises, Iron Man 3 is a witty, entertaining adventure and a strong addition to the Marvel canon',
      moviename:'IRON MAN 3',
      actor: 'Robert Downey Jr.',
      rating:10,
      type: 'Comedy',
      imgURL:'https://resizing.flixster.com/gjQfPXNYdWKnjmFOqpS4jkaXjaU=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p9259486_p_v8_af.jpg',
      publisher: 'loream ipsum',
      color: '#DBBC27',
      fontFamily: 'poopins',
      filteredRow: false,
      
    },

    {
      id: 7,
      title: 'CAPTAIN AMERICA',
      description:'Suspenseful and politically astute, Captain America: The Winter Soldier is a superior entry in the Avengers canon and is sure to thrill Marvel diehards',
      moviename:'CAPTAIN AMERICA: THE WINTER SOLDIER',
      actor: 'Jonathan Swift',
      rating:9,
      type: 'Action',
      imgURL:'https://resizing.flixster.com/ZX1nAlqUr_ZSTEYaEEZyKrsgs6k=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p9895254_p_v8_an.jpg',
      publisher: 'loream ipsum',
      color: '#6B5C9A',
      fontFamily: 'Roboto',
      filteredRow: false,
      
    },
    
  ];
}
  // searchMovies() {
  //   if (!this.inputValue) return;
  //   var filterResult = this.myFavMovies.filter((movie) => {
  //     if (movie.title.toLowerCase().includes(this.inputValue.toLowerCase())) {
  //       movie.filteredRow = true;
  //       return true;
  //     }

  //     movie.filteredRow = false;
  //     return false;
  //   });

  //   console.log({ filterResult });

  //   if (filterResult.length) {
  //     console.log('Movie Found Console');
  //     this.searchMsg =
  //       '<div class="p-4"><h1 class="text-success">Movie Found</h1></div>';
  //   } else {
  //     console.log('Movie Not Found Console');
  //     this.searchMsg =
  //       '<div class="p-4"><h1 class="text-danger">Movies Not Found</h1></div>';
  //   }

  //   this.myFavMovies = [...this.myFavMovies, ...filterResult];
  // }

  showMovieInfo(id: any, title: String) {
    console.log({ id, title });
  }
}