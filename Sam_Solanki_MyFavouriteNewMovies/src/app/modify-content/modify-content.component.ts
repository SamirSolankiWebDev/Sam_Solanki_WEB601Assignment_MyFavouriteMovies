import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MatDialog } from '@angular/material/dialog';
import { NewdialogComponent } from '../newdialog/newdialog.component';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
    newMovie: any = {};
    @Output() onCreation = new EventEmitter<Content>();
  
    addMovie(){
      this.onCreation.emit(this.newMovie);
      this.newMovie = {};
    }

    constructor(public dialog:MatDialog){

    }

    openDialog():void{
      const dialogRef = this.dialog.open(NewdialogComponent);
      dialogRef.afterClosed().subscribe(result => {
        if (result){
          this.newMovie = result;
          this.addMovie();
          console.log("MovieAddedFor Myreference");
        }
      });
    }
  
  }

