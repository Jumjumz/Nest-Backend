"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const mood_controller_1 = require("./mood.controller");
describe('MoodController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [mood_controller_1.MoodController],
        }).compile();
        controller = module.get(mood_controller_1.MoodController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=mood.controller.spec.js.map