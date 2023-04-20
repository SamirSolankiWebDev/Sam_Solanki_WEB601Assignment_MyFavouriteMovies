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

  defaultmovieimg: string = "https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg?cs=srgb&dl=antique-book-book-bindings-1005324.jpg&fm=jpg";



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

  
  showNovalInfo(id: any, title: String) {
    console.log({ id, title });
  }

  
}
