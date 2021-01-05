import { Model } from 'mongoose';
import { HttpService, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument } from './schemas/article.schema';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
    private httpService: HttpService,
  ) {}

  @Cron(CronExpression.EVERY_HOUR)
  async create(): Promise<any> {
    const url = 'http://hn.algolia.com/api/v1/search_by_date?query=nodejs';
    return this.httpService.get(url).toPromise()
      .then(response => {
        const articles = response.data;
        return this.articleModel.insertMany(articles.hits, {ordered : false });
      })
      .catch(error => {
        console.error('error', error);
      })
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find({deleted_at: null}).sort({'created_at': 'desc'}).exec();
  }

  async remove(articleId: number): Promise<any> {
    return await this.articleModel.findOneAndUpdate({story_id: articleId}, {deleted_at: new Date()});
  }

}
