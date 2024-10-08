import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl: string = 'https://api.rawg.io/api';
  private apiKey: string = '404353619eb041e6a1f0b540e5fd9134';

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get(`${this.baseUrl}/games?key=${this.apiKey}`);
  }

  getPlatforms(): Observable<any> {
    return this.http.get(`${this.baseUrl}/platforms?key=${this.apiKey}`);
  }

  getFilteredGames(startDate: string, endDate: string, platforms: string): Observable<any> {
    const url = `${this.baseUrl}/games?key=${this.apiKey}&dates=${startDate},${endDate}&platforms=${platforms}`;
    return this.http.get(url);
  }

  getPlatformById(platformId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/platforms/${platformId}?key=${this.apiKey}`);
  }

  searchGames(query: string): Observable<any> {
    const url = `${this.baseUrl}/games?key=${this.apiKey}&page_size=10&search=${query}`;
    return this.http.get(url);
  }

}
