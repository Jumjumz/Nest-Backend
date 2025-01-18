import { Document } from 'mongoose';
export declare class Mood extends Document {
    mood: string;
    note: string;
    timestamp: Date;
}
export declare const MoodSchema: import("mongoose").Schema<Mood, import("mongoose").Model<Mood, any, any, any, Document<unknown, any, Mood> & Mood & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Mood, Document<unknown, {}, import("mongoose").FlatRecord<Mood>> & import("mongoose").FlatRecord<Mood> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
