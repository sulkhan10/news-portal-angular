import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component'; // Adjust the path as necessary
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  // styleUrls: ['./news-list.component.css'],
  standalone: true, // If this is also standalone
  

  imports: [CommonModule, LoadingSpinnerComponent], // Add CommonModule here

})
export class NewsListComponent implements OnInit {
  news: any[] = [];
  loading: boolean = true; // Loading state

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.fetchNews();
  }

  fetchNews() {
    this.loading = true; // Set loading to true before fetching data
    this.newsService.fetchNews().subscribe({
      next: (data) => {
        console.log('Fetched news:', data);
        this.news = data.results; // Assuming your API returns results in a "results" array
        this.loading = false; // Set loading to false after data is fetched
      },
      error: (error) => {
        console.error('Error fetching news:', error);
        this.loading = false; // Set loading to false even on error
      }
    });
  }
  
}
