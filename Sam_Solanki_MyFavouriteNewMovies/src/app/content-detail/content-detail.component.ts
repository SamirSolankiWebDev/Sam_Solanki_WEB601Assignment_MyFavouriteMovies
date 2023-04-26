import { Component } from '@angular/core';
import { MovieService } from '../movie.service';import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  title = 'Samir_Solanki_Movies';
  contentId: number = 5;
  topContent: any = {};

  defaultmovieimg: string = "https://media.istockphoto.com/id/1265221960/vector/page-not-found-error-with-film-flap-design.jpg?s=170667a&w=0&k=20&c=GgmqFs3c6Gpv0gqr2joc398Z3ghR6w3yTnS_Oed57cg=";



  constructor(private route:ActivatedRoute, private MovieService: MovieService){}

  logId(){
    console.log(`ID: ${this.topContent.id}`);
    console.log(`Title: ${this.topContent.title}`);


  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.contentId = Number(params.get('id') ?? 0);
    this.MovieService.getContentById(this.contentId).subscribe(content => this.topContent = content);
    }); 
  }

  
  showMovieInfo(id: any, title: String) {
    console.log({ id, title });
  }

  
}
