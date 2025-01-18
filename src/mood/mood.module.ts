import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoodController } from './mood.controller';
import { MoodService } from './mood.service';
import { Mood, MoodSchema } from './mood.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Mood.name, schema: MoodSchema }])],
  controllers: [MoodController],
  providers: [MoodService],
})
export class MoodModule {}

