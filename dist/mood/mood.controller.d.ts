import { MoodService } from './mood.service';
import { CreateMoodDto } from './dto/create-mood.dto';
import { Mood } from './mood.schema';
export declare class MoodController {
    private readonly moodService;
    constructor(moodService: MoodService);
    create(createMoodDto: CreateMoodDto): Promise<Mood>;
    findAll(): Promise<Mood[]>;
    delete(id: string): Promise<Mood>;
}
