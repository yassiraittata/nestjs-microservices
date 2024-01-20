import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Order extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  price: string;

  @Prop()
  phoneNumber: string;
}

export const orderSchema = SchemaFactory.createForClass(Order);
