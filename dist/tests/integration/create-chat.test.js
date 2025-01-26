"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../src/interface/index"));
const request = (0, supertest_1.default)(index_1.default);
describe("Create Chat Integration Test", () => {
    it("Create Gemini Chat", async () => {
        const response = await request.post("/chat").send({
            uuid: "123456",
            message: "hello, Gemini!"
        });
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({});
    });
});
