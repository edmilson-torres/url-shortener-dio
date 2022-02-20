import { prop, getModelForClass } from '@typegoose/typegoose';

export class URL {
  @prop({ required: true })
  hash: string;

  @prop({ required: true })
  originURL: string;

  @prop({ required: true })
  shortURL: string;

  @prop({ required: true })
  createAt: Date;

  @prop({ required: true, default: '0' })
  clicks: number;
}
const URLModel = getModelForClass(URL);

export default URLModel;
