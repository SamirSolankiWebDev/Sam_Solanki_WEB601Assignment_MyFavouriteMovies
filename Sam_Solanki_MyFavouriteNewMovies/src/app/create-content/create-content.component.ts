// import { Component } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { AddMyMoviesService } from '../add-my-movies.service';

// import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.less']
})
export class CreateContentComponent {
//  constructor(private movieData: AddMyMoviesService) {}

  information: any = {}
  @Output() createEvent = new EventEmitter<any>();


  addContentEvents(){
    this.createEvent.emit(this.information);
    this.information = {};
  }

 
}
