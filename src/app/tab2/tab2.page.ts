import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public games: any[] = [];
  public platforms: any[] = [];   
  public filteredGames: any[] = [];
  public searchQuery: string = ''; 
  public selectedPlatform: number | '' = ''; 

  public startDate: string = '2015-09-01';
  public endDate: string = '2017-09-30';
  public platformsStr: string = '18,1,7'; 

  public isFilterVisible: boolean = false;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.loadGames();
    this.loadPlatforms();
    this.loadFilteredGames();
  }

  loadGames() {
    this.gameService.getGames().subscribe(
      (data: any) => {
        this.games = data.results;
        this.filteredGames = this.games;
      },
      (error: any) => {
        console.error('Erro ao obter jogos', error);
      }
    );
  }

  loadPlatforms() {
    this.gameService.getPlatforms().subscribe(
      (data: any) => {
        this.platforms = data.results;
        console.log('Plataformas:', this.platforms);
      },
      (error: any) => {
        console.error('Erro ao obter plataformas', error);
      }
    );
  }

  loadFilteredGames() {
    this.gameService.getFilteredGames(this.startDate, this.endDate, this.platformsStr).subscribe(
      (data: any) => {
        this.filteredGames = data.results;
        console.log('Jogos filtrados:', this.filteredGames);
      },
      (error: any) => {
        console.error('Erro ao obter jogos filtrados', error);
      }
    );
  }

  onSearch() {
    if (this.searchQuery.trim() !== '') {
      this.gameService.searchGames(this.searchQuery).subscribe(
        (data: any) => {
          this.filteredGames = data.results;
        },
        (error: any) => {
          console.error('Erro ao pesquisar jogos', error);
        }
      );
    } else {
      // Se a busca estiver vazia, recarregar todos os jogos
      this.filteredGames = this.games;
    }
  }

  onFilterByDate() {
    this.loadFilteredGames(); 
  }

  toggleFilterVisibility() {
    this.isFilterVisible = !this.isFilterVisible;
  }
}
