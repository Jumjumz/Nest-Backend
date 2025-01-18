import { Model } from 'mongoose';
import { Mood } from './mood.schema';
import { CreateMoodDto } from './dto/create-mood.dto';
export declare class MoodService {
    private moodModel;
    constructor(moodModel: Model<Mood>);
    create(createMoodDto: CreateMoodDto): Promise<Mood>;
    findAll(): Promise<Mood[]>;
    delete(id: string): Promise<Mood>;
}
