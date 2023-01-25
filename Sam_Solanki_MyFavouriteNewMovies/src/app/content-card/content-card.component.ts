import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.less']
})
export class ContentCardComponent {

  MovieListArray=new ContentList();
  ngOnInit(){

    const MovieOne:Content={
      id:0,
      title:'Action',
      description:'Actionmovie',
      moviename:'Avengers',
      actor:'jack',
      rating:5,
      imgURL:'https://angular.io/assets/images/logos/angular/angular.png'
      
    }
      this.MovieListArray.AddMoviesFunction(MovieOne);
    
  }

}
