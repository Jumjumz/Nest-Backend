import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mood } from './mood.schema';
import { CreateMoodDto } from './dto/create-mood.dto';

@Injectable()
export class MoodService {
  constructor(@InjectModel(Mood.name) private moodModel: Model<Mood>) {}

  async create(createMoodDto: CreateMoodDto): Promise<Mood> {
    const createdMood = new this.moodModel(createMoodDto);
    return createdMood.save();
  }

  async findAll(): Promise<Mood[]> {
    return this.moodModel.find().exec();
  }

  async delete(id: string): Promise<Mood> {
    return this.moodModel.findByIdAndDelete(id).exec();
  }
}
