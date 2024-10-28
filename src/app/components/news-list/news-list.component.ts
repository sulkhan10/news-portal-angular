import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common'; // Don't forget to import CommonModule
import { Observable } from 'rxjs';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  // styleUrls: ['./news-list.component.css'],
  imports: [CommonModule,LoadingSpinnerComponent], // Make sure CommonModule is included
  standalone: true,
})
export class NewsListComponent implements OnChanges {
  @Input() category!: string;
  news: any[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private newsService: NewsService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['category']) {
      this.fetchNews(this.category);
    }
  }

  fetchNews(category: string) {
    this.loading = true;
    this.errorMessage = ''; // Reset error message

    this.newsService.fetchNews(category).subscribe(
      (data) => {
        this.news = data.results; // Adjust based on API response
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
