import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-newdialog',
  templateUrl: './newdialog.component.html',
  styleUrls: ['./newdialog.component.scss']
})
export class NewdialogComponent {

  newMovie: any = {};
  constructor(public dialogRef: MatDialogRef<NewdialogComponent>){

  }


  closeDialog(): void{
    this.dialogRef.close();
  }

  addMovie(){
    this.dialogRef.close(this.newMovie);
  }

}
