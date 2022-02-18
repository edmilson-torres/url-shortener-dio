import { prop, Typegoose } from '@typegoose/typegoose'

export class URL extends Typegoose {
@prop({ required: true })
  hash: string

@prop({ required: true })
  originURL: string

@prop({ required: true })
  shortURL: string

@prop({ required: true })
  createAt: Date
}

export const URLModel = new URL().getModelForClass(URL)