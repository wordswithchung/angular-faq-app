import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { UnsplashService } from '../../services/unsplash.service';

import { Question } from '../../models/Question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent{
  questions:Question[];
  response:{};
  theOther:object[] = [];
  backgroundImageUrl:string;

  constructor(public dataService:DataService,
    private unsplashService:UnsplashService){
    this.unsplashService.getRandomPhoto().subscribe(info => {
      this.theOther.push(info);
    });
    
    this.response = this.theOther[0];
    console.log(this.theOther);
    console.log(this.response);
  }

  ngOnInit() {
    this.questions = this.dataService.getQuestions();
    console.log("When does this happen?");
  }

  addQuestion(question:Question){
    this.dataService.addQuestion(question);
  }

  getBackground(){
      
  }

}
