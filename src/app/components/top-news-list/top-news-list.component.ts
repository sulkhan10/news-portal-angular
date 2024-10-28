import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Component({
  selector: 'top-news-list',
  templateUrl: './top-news-list.component.html',
  imports: [CommonModule, LoadingSpinnerComponent],
  standalone: true,
})
export class TopNewsListComponent implements OnInit {
  topnews: any[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.fetchNewsTop();
  }

  fetchNewsTop() {
    this.loading = true;
    this.errorMessage = '';

    this.newsService.fetchNewsTop().subscribe(
      (data) => {
        console.log(data, 'fetchNewsTop');
        this.topnews = data.results; // Adjust based on API response
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.errorMessage = error; // Display error message
      }
    );
  }

  formatPublishedDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // Change to false for 24-hour format
    });
}

}
