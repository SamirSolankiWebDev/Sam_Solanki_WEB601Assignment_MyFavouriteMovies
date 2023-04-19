import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { movieservice } from '../movie.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  public myFavMovies: Content[] = [];
  public inputValue: String = '';
  public Search: boolean | null = null;
  defaultmovieimg: string = "https://media.istockphoto.com/id/1265221960/vector/page-not-found-error-with-film-flap-design.jpg?s=170667a&w=0&k=20&c=GgmqFs3c6Gpv0gqr2joc398Z3ghR6w3yTnS_Oed57cg=";
 
     ////////// NEW CODE 
     public IDsearch!: number;
     public searchResults: any[] = [];

     //////// NEW CODE


  constructor(private movieservice: movieservice) {

  }

  ngOnInit(): void {
    this.movieservice.getContent().subscribe(movies => this.myFavMovies = movies);
  }

  addmovies(newMovie: Content){
    this.movieservice.addContent(newMovie).subscribe(newMovieFromServer => {
      this.myFavMovies.push(newMovieFromServer);
      this.myFavMovies = [...this.myFavMovies];
    })
  }

  // SearchbyTitle(){
  //   this.Search = this.myFavMovies.some(movie => movie.title === this.inputValue);
  // }

  SearchbyTitle(){
    this.Search = this.myFavMovies.some(movie => movie.title.toLocaleLowerCase().includes (this.inputValue.toLocaleLowerCase()));
  }

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