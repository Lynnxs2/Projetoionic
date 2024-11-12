import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tab3', 
  templateUrl: 'tab3.page.html', 
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  surveyData = {
    favoriteGame: '',
    playTime: '',
    gameGenre: [],
    onlineGames: false,
    platform: '',
    attraction: ''
  };

  feedbackMessage: string | null = null;

  constructor(private location: Location) {}

  submitSurvey() {
    console.log('Dados da pesquisa:', this.surveyData);
    
    
    this.feedbackMessage = "Obrigado por responder!";

    
    setTimeout(() => {
      this.feedbackMessage = null;
      this.location.go(this.location.path()); 
      window.location.reload(); 
    }, 4000);
  }
}
