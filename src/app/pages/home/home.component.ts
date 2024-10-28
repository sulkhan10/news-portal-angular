import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NewsListComponent } from '../../components/news-list/news-list.component';
import { TopNewsListComponent } from '../../components/top-news-list/top-news-list.component';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  imports: [CommonModule, NewsListComponent,TopNewsListComponent], // Add CommonModule here
  standalone: true,
})
export class HomeComponent implements OnInit {
  currentDate: string;
  selectedCategory: string = 'home';

  constructor(private route: ActivatedRoute, private router: Router) {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.currentDate = new Date().toLocaleDateString('en-US', options);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'] || 'home';
    });
  }

  setSection(section: string) {
    this.router.navigate([''], { queryParams: { category: section } });
  }
}
