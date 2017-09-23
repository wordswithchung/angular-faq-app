import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionListComponent } from './components/question-list/question-list.component';

import { DataService } from './services/data.service';
import { UnsplashService } from './services/unsplash.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionComponent,
    QuestionListComponent,
    AddQuestionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService,
    UnsplashService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
