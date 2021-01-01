import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {

  @Prop()
  author: string;

  @Prop()
  created_at: string;

  @Prop()
  story_id: number;

  @Prop()
  story_title: string;

  @Prop()
  story_url: string;

  @Prop()
  title: string;

  @Prop()
  url: string;

}

export const ArticleSchema = SchemaFactory.createForClass(Article);