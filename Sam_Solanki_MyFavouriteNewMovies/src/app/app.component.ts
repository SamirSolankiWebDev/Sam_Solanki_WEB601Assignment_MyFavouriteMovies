import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Samir_Solanki_movies';
  contentId: number = 5;
  topContent: any = {};

  defaultmovieimg: string = "https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg?cs=srgb&dl=antique-book-book-bindings-1005324.jpg&fm=jpg";



  constructor(private MovieService: MovieService){}

  logId(){
    console.log(`ID: ${this.topContent.id}`);
    console.log(`Title: ${this.topContent.title}`);


  }

  ngOnInit(){
    this.MovieService.getContentById(this.contentId).subscribe(content => this.topContent = content);
  }

  
  showMovieInfo(id: any, title: String) {
    console.log({ id, title });
  }

  
}
