import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://api.nytimes.com/svc/news/v3/content/all/all.json';
  private apiKey = 'HCKXdfPxQsVck45aEQgtfil779exiBnx'; // Replace with your actual NY Times API key

  constructor(private http: HttpClient) {}

  fetchNews(category: string): Observable<any> {
    return this.http.get<any>(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${this.apiKey}`);
  }
  fetchNewsTop(): Observable<any> {
    return this.http.get<any>(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${this.apiKey}`);
  }



  private handleError(error: any) {
    console.error('An error occurred:', error); // Log the error to the console
    return throwError('Something went wrong; please try again later.');
  }
}
