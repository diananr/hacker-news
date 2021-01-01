import { Controller, Delete, Get, HttpStatus, NotFoundException, Param, Res } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {

  constructor(
    private articlesService: ArticlesService
  ) {}

  @Get()
  async getAllArticles(@Res() res) {
    const articles = await this.articlesService.findAll();
    return res.status(HttpStatus.OK).json(articles);
  }

  @Delete('/:id')
  public async deleteCustomer(@Res() res, @Param('id') articleId: number) {
    if (!articleId) {
      throw new NotFoundException('Article ID does not exist');
    }

    const article = await this.articlesService.remove(articleId);
    if (!article) {
      throw new NotFoundException('Article does not exist');
    }

    return res.status(HttpStatus.OK).json({
      message: 'Customer has been deleted',
      article,
    });
  }

}
