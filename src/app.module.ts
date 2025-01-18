import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoodModule } from './mood/mood.module';

@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGODB_URI),
        MoodModule,
    ],
})
export class AppModule {}

