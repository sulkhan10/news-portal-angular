import { Routes } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component'; // Ensure this file exists at the specified path
import { NewsDetailComponent } from './components/news-detail/news-detail.component';

export const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: 'news/:id', component: NewsDetailComponent },
];
