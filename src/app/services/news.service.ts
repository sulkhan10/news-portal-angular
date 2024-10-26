import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://api.nytimes.com/svc/news/v3/content/all/all.json';
  private apiKey = 'HCKXdfPxQsVck45aEQgtfil779exiBnx'; // Replace with your actual NY Times API key

  constructor(private http: HttpClient) {}

  fetchNews(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?api-key=${this.apiKey}`);
  }
  
}


