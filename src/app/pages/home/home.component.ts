import { Component } from '@angular/core';
import { NewsListComponent } from '../../components/news-list/news-list.component';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  imports: [NewsListComponent],
  standalone: true, // If this is also standalone

})
export class HomeComponent {
  currentDate: string;

  constructor() {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.currentDate = new Date().toLocaleDateString('en-US', options);
  }
}
