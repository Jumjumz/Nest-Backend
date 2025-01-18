import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Mood extends Document {
    @Prop({ required: true })
    mood: string;

    @Prop()
    note: string;

    @Prop({ required: true })
    timestamp: Date;
}

export const MoodSchema = SchemaFactory.createForClass(Mood);

