import { Injectable } from '@angular/core';

import { Question } from '../models/Question'

@Injectable()
export class DataService {
  questions:Question[];

  constructor() {   
    /*
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My name is Chung!',
        hide: true
      },
      {
        text: 'What\'s your favorite food?',
        answer: 'Pizza!',
        hide: true
      },
      {
        text: 'What is your dog\'s name?',
        answer: 'Ruby.',
        hide: true
      }
   ]
   */
  }

  // Get questions from local storage
  getQuestions(){
    if (localStorage.getItem('questions') === null){
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  // Add questions to local storage
  addQuestion(question:Question){
    this.questions.unshift(question);

    // initialize local variable
    let questions;

    if (localStorage.getItem('questions') === null){
      questions = [];
      // push new question
      questions.unshift(question);
    } else {
      // get questions already in local storage
      questions = JSON.parse(localStorage.getItem('questions'));
      // add new question
      questions.unshift(question); 
    }

    localStorage.setItem('questions', JSON.stringify(questions));
  }

  // Remove questions from local storage
  removeQuestion(question:Question){
    for (let i = 0; i < this.questions.length; i++){
      if (question == this.questions[i]){
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
