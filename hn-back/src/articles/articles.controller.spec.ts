import { Test } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { Article } from './schemas/article.schema';

describe('ArticlesController', () => {
  let articlesController: ArticlesController;
  let articlesService: ArticlesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [
        {
          provide: ArticlesService,
          useValue: {
            model: jest.fn(),
            http: jest.fn(),
          }
        },
      ],
    }).compile();

    articlesService = moduleRef.get<ArticlesService>(ArticlesService);
    articlesController = moduleRef.get<ArticlesController>(ArticlesController);
  });

  describe('getAllArticles', () => {
    it('should return an array of articles', async () => {
      const result :Article[] = [];
      expect(result);
    });
  });

  describe('deleteArticle', () => {
    it('should return an article deleted', async () => {
      const result = new Article();
      expect(result);
    });
  });
});