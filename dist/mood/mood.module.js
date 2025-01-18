"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoodModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mood_controller_1 = require("./mood.controller");
const mood_service_1 = require("./mood.service");
const mood_schema_1 = require("./mood.schema");
let MoodModule = class MoodModule {
};
exports.MoodModule = MoodModule;
exports.MoodModule = MoodModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: mood_schema_1.Mood.name, schema: mood_schema_1.MoodSchema }])],
        controllers: [mood_controller_1.MoodController],
        providers: [mood_service_1.MoodService],
    })
], MoodModule);
//# sourceMappingURL=mood.module.js.map