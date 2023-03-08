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

  // ngOnInit(): void {
  //   public fontFamily: String = 'Poppins';
  //   public formContentValid: Boolean = true;

  //  throw new Error('Method not implemented.');

  // insertMovieToArray(isValid: boolean, formValue: any) {
  //   return new Promise((resolve, reject) => {
  //     if (!isValid) {
  //       reject(false); // pass values
  //     } else {
  //       var newMovie: Content = {
  //         ...formValue,
  //         filteredRow: false,
  //         price: formValue.id,
  //       };
  //       var myFavMovies: Array<Content> = [
  //         newMovie,
  //         ...this.movieData.getMyFavMovies(),
  //       ];

  //       this.movieData.setMyFavMovies(myFavMovies;
  //       resolve('The addition is successful Title: ' + formValue.title); // pass values
  //     }
  //   });
  // }

  


  // onSubmit(form: NgForm) {
  //   this.insertMovieToArray(form.valid ?? true, form.value)
  //     .then((response) => {
  //       console.log(response);
  //       form.reset();
  //     })
  //     .catch((err) => (this.formContentValid = form.valid ?? true));
  // }


}
