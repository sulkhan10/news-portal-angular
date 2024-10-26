import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NewsService } from '../../services/news.service'; 

@Component({
  selector: 'app-news-list',
  standalone: true,
  templateUrl: './news-list.component.html',
  // styleUrls: ['./news-list.component.css'],
  imports: [CommonModule], // Add CommonModule to imports
})
export class NewsListComponent implements OnInit {
  news: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.fetchNews().subscribe(
      (data: any) => {
        this.news = data.results;  
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }
}
