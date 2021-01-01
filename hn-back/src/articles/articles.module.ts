import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { Article, ArticleSchema } from 'src/articles/schemas/article.schema';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{name: Article.name, schema: ArticleSchema}]),
    ScheduleModule.forRoot(),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
