import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterContentTypePipe } from './filter-content-type.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessagesComponent } from './messages/messages.component';

import  { HttpClientModule } from '@angular/common/http';
import  { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import  { InMemoryDataService } from './in-memory-data.service';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NewdialogComponent } from './newdialog/newdialog.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';




@NgModule({
  declarations: [AppComponent, ContentCardComponent, ContentListComponent, FilterContentTypePipe, HoverAffectDirective, MessagesComponent, ModifyContentComponent, NewdialogComponent, ContentDetailComponent, PageNotFoundComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,  MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,AppRoutingModule, 
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false,
  delay: 1000}), BrowserAnimationsModule
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}