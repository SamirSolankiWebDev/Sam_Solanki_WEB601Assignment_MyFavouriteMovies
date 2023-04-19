import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  public myFavMovies: Content[] = [];
  public inputValue: String = '';
//  public inputValue: number = -1;
  public Search: boolean | null = null;
  public movieIdSearchID: number = 999;
  public IDsearch!: number;
  public searchResults: any[] = [];

  
  defaultmovieimg: string = "https://media.istockphoto.com/id/1265221960/vector/page-not-found-error-with-film-flap-design.jpg?s=170667a&w=0&k=20&c=GgmqFs3c6Gpv0gqr2joc398Z3ghR6w3yTnS_Oed57cg=";

  constructor(private MovieService: MovieService) {

  }

  ngOnInit(): void {
    this.MovieService.getContent().subscribe(movies => this.myFavMovies = movies);
  }

  // SearchbyTitle(){
  //   this.Search = this.myFavMovies.some(movie => movie.title === this.inputValue);
  // }

  //  SearchbyTitle(){
  //   this.isSearchResult = false;

  //   this.Search = this.myFavMovies.some(movie => movie.title.toLocaleLowerCase().includes (this.inputValue.toLocaleLowerCase()));
  // console.log("SearchButton CLick");
  // }

//   SearchbyTitle(){
//     // const movie = this.myFavMovies.find(movie => movie.title.toLocaleLowerCase().includes(this.inputValue.toLocaleLowerCase()));
//     const movie = this.myFavMovies.find(movie => movie.id === this.inputValue);

//     this.Search = movie !== undefined;
//     console.log("SearchButton Click");

//     if (this.Search) {
//       console.log("SearchIf 1");
//         this.movieIdSearchID = this.inputValue;
//     } else {
//       console.log("SearchIf Else");
//         this.movieIdSearchID = -1;
//     }
// }



  searchId(id: number) {
  const movie = this.myFavMovies.find(movie => movie.id === id);
  if (movie) {
    console.log('Movie found:', movie);
    this.searchResults.push(movie);

  } else {
    console.log('Movie not found');
  }
}

  showMovieInfo(id: any, title: String) {
    console.log({ id, title });
  }
}