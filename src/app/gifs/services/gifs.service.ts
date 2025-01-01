import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gifs.intefaces';

@Injectable({ providedIn: 'root' })
export class GifsService {


  public gifsList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private apiKey: string = 'mj8csU1RhvMA03jK1bqIoAZTtFERamVh';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(
    private http: HttpClient,  
  ) {
    this.readLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((t) => t !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage() {
    localStorage.setItem('historialGifs', JSON.stringify(this._tagsHistory));
  } 

  private readLocalStorage() {
    if (localStorage.getItem('historialGifs')) {
      this._tagsHistory = JSON.parse(localStorage.getItem('historialGifs')!);      
    }   
  }

  searchTag(tag: string) {
    //Filtrar entradas vacías
    if (tag.trim().length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10')
      .set('offset', '0');

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => { this.gifsList = resp.data });
  }
}
