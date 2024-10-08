import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3', // Prioridade para Tab3
  templateUrl: 'tab3.page.html', // Certifique-se de que o arquivo HTML esteja correto
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  // Estrutura de dados da pesquisa
  surveyData = {
    favoriteGame: '',
    playTime: '',
    gameGenre: [],
    onlineGames: false,
    platform: '',
    attraction: ''
  };

  constructor() {}

  
  submitSurvey() {
    console.log('Dados da pesquisa:', this.surveyData);
    
  }
}
