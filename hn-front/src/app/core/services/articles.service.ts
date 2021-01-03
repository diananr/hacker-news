import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private api: ApiService,
  ) { }

  getAllArticles() {
    return this.api.get('articles');
  }

  deleteArticle(articleId: number) {
    return this.api.delete(`articles/${articleId}`);
  }
}
