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
  public Search: boolean | null = null;
  defaultmovieimg: string = "https://media.istockphoto.com/id/1265221960/vector/page-not-found-error-with-film-flap-design.jpg?s=170667a&w=0&k=20&c=GgmqFs3c6Gpv0gqr2joc398Z3ghR6w3yTnS_Oed57cg=";


  constructor(private MovieService: MovieService) {

  }

  ngOnInit(): void {
    this.MovieService.getContent().subscribe(movies => this.myFavMovies = movies);
  }

  addMovies(newMovie: Content){
    this.MovieService.addContent(newMovie).subscribe(newMovieFromServer => {
      this.myFavMovies.push(newMovieFromServer);
      this.myFavMovies = [...this.myFavMovies];
    })
  }

  SearchbyTitle(){
    this.Search = this.myFavMovies.some(movie => movie.title === this.inputValue);
  }


  

  showMovieInfo(id: any, title: String) {
    console.log({ id, title });
  }
}