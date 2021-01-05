import { Controller, Delete, Get, HttpStatus, NotFoundException, Param, Res } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {

  constructor(
    private articlesService: ArticlesService
  ) {}

  @Get()
  async getAllArticles() {
    const articles = await this.articlesService.findAll();
    return articles;
  }

  @Delete('/:id')
  public async deleteArticle(@Param('id') articleId: number) {
    if (!articleId) {
      throw new NotFoundException('Article ID does not exist');
    }

    const article = await this.articlesService.remove(articleId);
    if (!article) {
      throw new NotFoundException('Article does not exist');
    }
    return article;
  }

}
