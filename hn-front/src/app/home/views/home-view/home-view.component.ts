import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  public articles = []

  constructor(
    private articlesService: ArticlesService,
  ) { }

  getArticles(){
    this.articlesService.getAllArticles().subscribe(
      (response: any)=>{
        this.articles = response;
      },
      (error: any)=>{
        console.log('error', error);
      }
    )
  }

  ngOnInit(): void {
    this.getArticles();
  }

  openArticle(article: any){
    window.open(article.story_url);
  }

  deleteArticle(article: any){
    this.articlesService.deleteArticle(article.story_id).subscribe(
      (response: any)=>{
        console.log('response', response);
        this.getArticles();
      },
      (error: any)=>{
        console.log('error', error);
      }
    )
  }

}
