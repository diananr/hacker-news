import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {

  @Prop()
  author: string;

  @Prop()
  created_at: string;

  @Prop({unique: true})
  story_id: number;

  @Prop()
  story_title: string;

  @Prop()
  story_url: string;

  @Prop()
  title: string;

  @Prop()
  url: string;

  @Prop()
  isDeleted: Date;

}

export const ArticleSchema = SchemaFactory.createForClass(Article);