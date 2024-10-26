import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  // styleUrls: ['./news-detail.component.css'],
})
export class NewsDetailComponent implements OnInit {
  articleId: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.articleId = this.route.snapshot.paramMap.get('id')!;
    // Fetch the article details using this.articleId
  }
}
