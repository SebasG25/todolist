import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoteDocument = Note & Document;

@Schema()
export class Note {
  @Prop({ default: 'Default title', trim: true })
  title: string;

  @Prop({ default: 'Default content', trim: true })
  body: string;

  @Prop({ default: false })
  archived: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
