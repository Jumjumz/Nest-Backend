import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { MoodService } from './mood.service';
import { CreateMoodDto } from './dto/create-mood.dto';
import { Mood } from './mood.schema';

@Controller('mood')
export class MoodController {
    constructor(private readonly moodService: MoodService) {}

    @Post()
    async create(@Body() createMoodDto: CreateMoodDto): Promise<Mood> {
        return this.moodService.create(createMoodDto);
    }

    @Get()
    async findAll(): Promise<Mood[]> {
        return this.moodService.findAll();
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Mood> {
        return this.moodService.delete(id);
    }
}

